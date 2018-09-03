import * as express from 'express';
import { securityHandler } from './utils/security-utils';
import * as boom from 'express-boom';
import * as fileUpload from 'express-fileupload';
import { getUsersHandler } from './http/get-users';
import { addOptionHandler } from './http/add-option';
import { addImageHandler } from './http/add-image';
import { addRoundHandler } from './http/add-round';
import { userMiddleware } from './utils/express-utils';
import * as bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json());
router.use(boom());
router.use(securityHandler);
router.use(fileUpload());

router.get('/users', getUsersHandler);
router.post('/options', userMiddleware, addOptionHandler);
router.post('/images', userMiddleware, addImageHandler);
router.post('/rounds', userMiddleware, addRoundHandler);

export default router;
