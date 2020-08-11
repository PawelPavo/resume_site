import * as express from 'express';
import languagesRouter from './languages';
import mailgunRoiuter from './contact'

const router = express.Router();

router.use('/languages', languagesRouter);
router.use('/contact', mailgunRoiuter );

export default router;