import * as express from 'express';
import db from '../../db';

const router = express.Router();

//GET api/languages 
router.get('/', async(req,res) => {
    try {
        const languages = await db.languages.all();
        res.json(languages);
    } catch (error) {
        console.log(error)
    }
});

export default router;