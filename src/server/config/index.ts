import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if(!envFound){
    throw new Error ('Cannot locate the env file!');
}

export default{
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    },
    mailgun: {
        mailgun_api_key: process.env.MAILGUN_API_KEY,
        mailgun_domain: process.env.MAILGUN_DOMAIN,
        mailgun_admin_email: process.env.MAILGUN_ADMIN_EMAIL
    }
};