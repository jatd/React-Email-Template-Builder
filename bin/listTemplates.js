
import Table from 'cli-table';
import mailchimp from '../server/config/mailchimp';

/**
 * Query to get folder templates
 * path: '/template-folders/',
 */

/**
 * Patient Recall Folder Id: '81203b84c5'
 * Patient Reminder Folder Id: '4ca4d89be2'
 * Patient Appointment Folder Id: '6460ad0f8a'
 * Patient Review Folder Id: '716f8ca338',
 * Patient Misc Folder Id: 'e302715ef3',
 * User Folder Id: '74fda3e1ef'
 */


async function listTemplates() {
  try {
    const { templates } = await mailchimp.get({
      path: '/templates/',
      query: {
        count: 5000,
        folder_id: 'e302715ef3',
      },
    });

    const table = new Table({
      head: ['Template ID', 'Template Name'],
      colWidths: [20, 60],
    });

    templates.forEach(({ id, name }) => table.push([id, name]));
    console.log(table.toString());
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

listTemplates();
