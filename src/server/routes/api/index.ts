import * as express from 'express';
import languagesRouter from './languages';

const router = express.Router();

router.use('/languages', languagesRouter);

export default router;