import React from "react";
import mailchimpify from "mailchimpify";
import { renderEmail } from "react-html-email";
import TemplateMenu from "./TemplateMenu";
import styles from "./styles.scss";

export default function TemplateDisplay({
  renderTemplate,
  devMode,
  sendTemplate,
  sendingEmail
}) {
  if (!renderTemplate) {
    return (
      <div id="templateDisplay" className={styles.templateDisplay}>
        &nbsp;
      </div>
    );
  }

  const color = devMode ? "#206477" : "*|PRIMARY_COLOR|*";
  const maxWidth = 600;

  const templateProps = {
    defaultColor: "#206477",
    color,
    maxWidth,
    title: "",
    devMode
  };

  const template = renderTemplate(templateProps);

  let html = mailchimpify(renderEmail(template));

  html = html.replace(/&quot;/g, '"');
  html = html.replace(/&lt;/g, "<");
  html = html.replace(/&gt;/g, ">");

  return (
    <div
      className={
        devMode ? styles.templateDisplayContainer : styles.templateDisplayHtml
      }
    >
      <div
        id="templateDisplay"
        className={
          devMode ? styles.templateDisplay : styles.templateDisplayHtml
        }
      >
        {devMode ? template : html}
        <TemplateMenu
          sendTemplate={values => sendTemplate(values, html)}
          sendingEmail={sendingEmail}
        />
      </div>
    </div>
  );
}
