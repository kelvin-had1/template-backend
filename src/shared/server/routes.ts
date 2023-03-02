import { Router } from 'express';
import { userRouter } from '@modules/User/routes/User.routes';
const router = Router();

router.use('/user', userRouter);

export { router };