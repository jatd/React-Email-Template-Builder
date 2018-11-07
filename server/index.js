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
  sendTestEmailTemplate({
    toEmail: email || "dhillon.jatinder@gmail.com",
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
    });
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

const defaultMergeVars = [
  {
    name: "PRIMARY_COLOR",
    content: "#c5ab78"
  },
  {
    name: "ACCOUNT_CLINICNAME",
    content: "Ivory Dental"
  },
  {
    name: "ACCOUNT_LOGO_URL",
    content: ""
  },
  {
    name: "ACCOUNT_PHONENUMBER",
    content: "(140) 338-17423"
  },
  {
    name: "ACCOUNT_TWILIONUMBER_FORMATTED",
    content: "(158) 735-51719"
  },
  {
    name: "ACCOUNT_TWILIONUMBER",
    content: "+15873551719"
  },
  {
    name: "ACCOUNT_CITY",
    content: "Lethbridge, Alberta"
  },
  {
    name: "ACCOUNT_CONTACTEMAIL",
    content: "admin@ivorydental.ca"
  },
  {
    name: "ACCOUNT_ADDRESS",
    content: "335 Columbia Blvd W"
  },
  {
    name: "PATIENT_FIRSTNAME",
    content: "Justin"
  },
  {
    name: "RECALL_DUEDATE",
    content: "November 30th, 2017"
  },
  {
    name: "ACCOUNT_WEBSITE",
    content: "https://www.denverdentistry.com"
  },
  {
    name: "BOOK_URL",
    content: "https://www.ivorydental.ca/site/home/?cc=book"
  },
  {
    name: "CONFIRMATION_URL",
    content: "http://www.google.com"
  },
  {
    name: "FACEBOOK_URL",
    content: "https://www.facebook.com/IvoryDentalLethbridge/"
  },
  {
    name: "GOOGLE_URL",
    content:
      "https://search.google.com/local/writereview?placeid=ChIJz4gv9POIblMR4bb7dpe2p1E"
  }
];
