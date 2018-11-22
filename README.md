# React Email Template Builder

## Setup

- npm install
- Console Terminal #1: npm run dev
- Console Terminal #2: npm run dev:server

Go to http://localhost:8080 to view templates.

## Adding a Directory Folder and Templates

- Add a directory to the ./js/templates folder
- index.js file of your directory should export all the templates in that directory. See sample directory for details.
- The main index.js file in ./js/templates folder should export any directories you add. See main index file in the ./js/templates folder for details.

## Additional Setup

Sending Test Templates Through Mandrill

- Set up a Mandrill account at http://www.mandrill.com.
- Create a blank template called 'test-html-template'. This allows you to generate custom HTML and CSS that you can directly send to Mandrill.
- Add your Mandrill API key to a .env file exactly like below and then you're ready to go!

MANDRILL_API_KEY = "ENTER YOUR KEY HERE"
