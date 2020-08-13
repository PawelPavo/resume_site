import * as express from 'express';
import db from '../../db';

const router = express.Router();

//GET api/repos 
router.get('/', async(req,res) => {
    try {
        const repos = await db.repos.all();
        res.json(repos);
    } catch (error) {
        console.log(error)
    }
});

export default router;