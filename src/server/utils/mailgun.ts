import * as mailgunLoader from 'mailgun-js';
import config from '../config';

let mailgun = mailgunLoader({
    apiKey: config.mailgun.mailgun_api_key,
    domain: config.mailgun.mailgun_domain
 });

 const sendMail = (to: string, from:string, subject:string, content:string) => {
     let data = {
         to,
         from,
         subject,
         text: content
     };
     return mailgun.messages().send(data)
 };

 export default sendMail;