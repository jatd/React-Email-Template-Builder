# React Email Template Builder

## Setup

- npm install
- Console Terminal #1: npm run dev
- Console Terminal #2: npm run dev:server

Go to http://localhost:8080 to view templates.

## Adding a Directory Folder and New Template

- Add a directory to the ./js/templates folder
- There is sample directory and sample templates already in there.
- The index.jx file of the ./js/directory/yourDirectory should export all the templates in that directory. See sample directory for details.
- The main index.js file in ./js/templates folder should export any directories you add. See main index file for details.

## Setting Default Template

- Double click on any file to set it as the default template that hot-reloads when updating any code.

## Additional Setup

Sending Test Templates Through Mandrill

- Set up a Mandrill account at http://www.mandrill.com.
- Create a blank template called 'test-html-template'. This allows you to generate custom HTML and CSS that you can directly send to Mandrill instead of hosting your templates on a third-party.
- Add your Mandrill API key to a .env file exactly like below and then you're ready to go!

MANDRILL_API_KEY = "ENTER YOUR KEY HERE"
