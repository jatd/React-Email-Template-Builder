# React Email Template Builder

React Email Template Builder allows you to create email templates using customized React Components that are extensible, customizable, and responsive.

![Front page](https://github.com/jatd/React-Email-Template-Builder/blob/master/React_Builder_Screen_Shot.png?raw=true)

## Setup

- npm install
- Console Terminal #1: npm run dev
- Console Terminal #2: npm run dev:server

Go to http://localhost:8080 to view templates.

## Additional Setup

Sending Test Templates Through Mandrill

- Set up a Mandrill account at http://www.mandrill.com.
- Create a blank template called 'test-html-template'. This allows you to generate custom HTML and CSS that you can directly send to Mandrill.
- Add your Mandrill API key to a .env file exactly like below and then you're ready to go!

MANDRILL_API_KEY = "ENTER YOUR KEY HERE"
