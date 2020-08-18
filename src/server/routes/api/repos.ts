import * as express from 'express';
import db from '../../db';

const router = express.Router();


//GET api/count
router.get('/count', async(req,res) => {
    try {
        const [count] = await db.repos.count();
        res.json(count);
    } catch (error) {
        console.log(error)
    }
});

//GET api/repos/:tag
router.get('/:tag', async(req,res) => {
    const {tag} = req.params
    console.log(tag)
    try {
        const repos = await db.repos.find(tag);
        res.json(repos);
    } catch (error) {
        console.log(error)
    }
});

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