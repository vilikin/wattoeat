import * as express from 'express';
import { getUsersHandler } from './http/get-users';

const router = express.Router();

router.get('/users', getUsersHandler);

export default router;
