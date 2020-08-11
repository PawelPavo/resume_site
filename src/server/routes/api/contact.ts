import * as express from 'express';
import sendEmail from '../../utils/mailgun';
import config from '../../config'


const router = express.Router();

//POST api/contact
router.post('/', async(req, res) => {
    const admin = config.mailgun.mailgun_admin_email;
    const email = req.body.email;
    const subject = req.body.subject;
    const content = req.body.content;
    try {
        await sendEmail(admin, email, subject, content);
        res.send('Email sent!')
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;