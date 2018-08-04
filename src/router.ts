import * as express from 'express';
import { securityHandler } from './http/security';
import { getUsersHandler } from './http/get-users';

const router = express.Router();

router.use(securityHandler);
router.get('/users', getUsersHandler);

export default router;
