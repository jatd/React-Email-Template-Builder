import mandrill from "../config/mandrill";

export function sendTestEmailTemplate(config) {
  return sendTemplate(config);
}

export function sendTemplate(config) {
  const defaultMergeVars = [
    {
      name: "UNSUB",
      content: ""
    },
    {
      name: "ACCOUNT_NAME",
      content: config.fromName
    }
  ];

  const {
    from = "noreply@test.com",
    subject,
    toEmail,
    templateName,
    mergeVars,
    replyTo,
    fromName = "React Email Template Builder",
    attachments,
    html
  } = config;

  return new Promise((resolve, reject) => {
    const htmlObj = html ? { html } : {};

    mandrill.messages.sendTemplate(
      {
        template_name: html ? "test-html-template" : templateName,

        template_content: [
          {
            name: "example name",
            content: "example content"
          }
        ],

        // Message Data
        message: {
          ...htmlObj,
          from,
          subject,
          from_email: from,
          from_name: fromName,
          to: [
            {
              email: toEmail,
              type: "to"
            }
          ],

          headers: { "Reply-To": replyTo },

          global_merge_vars: mergeVars.concat(defaultMergeVars),
          attachments
        }
      },

      // Success Callback
      result => {
        resolve(result);
      },

      // Error Callback
      err => {
        if (err) {
          console.error(`Mandrill Error: ${JSON.stringify(err, null, 2)}`);
          reject(err);
        }
      }
    );
  });
}
