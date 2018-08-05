import * as express from 'express';
import { securityHandler } from './http/utils/security-handler';
import * as boom from 'express-boom';
import { getUsersHandler } from './http/get-users';

const router = express.Router();

router.use(boom());
router.use(securityHandler);

router.get('/users', getUsersHandler);

export default router;
