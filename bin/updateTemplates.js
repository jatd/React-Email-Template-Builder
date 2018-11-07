
import React from 'react';
import mailchimpify from 'mailchimpify';
import { renderEmail } from 'react-html-email';
import size from 'lodash/size';
import Table from 'cli-table';
import mailchimp from '../server/config/mailchimp';
import * as Templates from '../src/js/templates';
import TemplatesRegistry from '../src/js/templates/registry';
import { renderToStaticMarkup } from 'react-dom/server';
import mandrill from '../server/config/mandrill';

async function updateTemplates() {
  try {
    console.log(`Updating ${size(TemplatesRegistry)} templates on MailChimp...`);

    const table = new Table({
      head: ['Template ID', 'Template Name', 'Status'],
      colWidths: [20, 60, 10],
    });

    // For each template in the registry, update it on Mailchimp
    for (const templateFileName in TemplatesRegistry) {
      const Template = Templates[templateFileName];
      const { id, name } = TemplatesRegistry[templateFileName];

      // Render the React email component to a static string of html
      const color = '*|PRIMARY_COLOR|*';
      const maxWidth = 600;

      const templateProps = {
        defaultColor: '#206477',
        color,
        maxWidth,
        title: '',
        devMode: false,
      };

      // TODO: Change this default color
      let html = renderToStaticMarkup(<Template {...templateProps} />);

      html = html.replace(/&quot;/g,'"');
      html = html.replace(/&lt;/g, '<');
      html = html.replace(/&gt;/g, '>');

      // Replace the HTML of template with new rendered code
      // This is seems broken on MailChimp
     //await mailchimp.patch(`/templates/${id}`, { name, html });

     await callMandrill(name, html);

     table.push([id, name, '\u2714']);
      
    }

    console.log(table.toString());
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

const callMandrill = (name, html) => new Promise((resolve, reject) => {
  mandrill.templates.update(
    {
      name: name,
      'from_email': '', 'from_name': '', subject: '', code: html, text: '', publish: true
    },

    ({ html }) => {
      resolve(html);
    },

    (err) => {
      reject(err);
    },
  );
});

updateTemplates();
