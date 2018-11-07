
import MailChimp from 'mailchimp-api-v3';

const mailchimp = new MailChimp(process.env.MAILCHIMP_API_KEY);

export default mailchimp;
