import * as express from 'express';
import reposRouter from './repos';
import mailgunRoiuter from './contact'

const router = express.Router();

router.use('/repos', reposRouter);
router.use('/contact', mailgunRoiuter );

export default router;