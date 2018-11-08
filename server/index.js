require("babel-polyfill");
import { sendTestEmailTemplate } from "./mail";
const { promisify } = require("util");
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3300;

app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// Support for parsing application/vnd.api+json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Deserialize jsonapi request bodies
app.use(async (req, res, next) => {
  if (req.header("Content-Type") === "application/vnd.api+json") {
    req.body = await new Deserializer({
      keyForAttribute: "camelCase"
    }).deserialize(req.body);
  }
  next();
});

// Increased size so that Converting to PDF works
// Parses any Unicode encoding of json into the body
app.use(bodyParser.json({ limit: "10mb" }));

// Parses Buffer data into body
app.use(bodyParser.raw({ limit: "10mb" }));

app.listen(port, () =>
  console.log(`Email template generator server listening on port ${port}!`)
);

app.post("/api/sendTestTemplate", (req, res) => {
  const { html, email, fromName, subject } = req.body;
  return email
    ? sendTestEmailTemplate({
        toEmail: email,
        mergeVars: defaultMergeVars,
        fromName: fromName || "Test Dental",
        subject: subject || "Test Template",
        html
      })
        .then(() => {
          console.log("Email Sent to: ", email);
          res.status(200).end();
        })
        .catch(err => {
          console.error(err);
        })
    : res.status(400);
});

app.post("/api/defaultTemplate", (req, res) => {
  const { selectedTemplate, directory } = req.body;
  const logger = fs.createWriteStream("defaultTemplate.txt");
  logger.write(selectedTemplate);
  logger.write("\n" + directory);
  logger.end();
  console.log("Set default template: ", selectedTemplate);
  res.status(200).end();
});

app.get("/api/defaultTemplate", (req, res) => {
  return readFileAsync("defaultTemplate.txt", { encoding: "utf8" })
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log("ERROR:", err));
});

// Enter your default mergeVars here;
const defaultMergeVars = [];
