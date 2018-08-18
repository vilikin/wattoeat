import * as express from 'express';
import { securityHandler } from './utils/security-utils';
import * as boom from 'express-boom';
import * as fileUpload from 'express-fileupload';
import { getUsersHandler } from './http/get-users';
import { addOptionHandler } from './http/add-option';
import { addImageHandler } from './http/add-image';
import { addUserToRequest } from './utils/express-utils';

const router = express.Router();

router.use(boom());
router.use(securityHandler);
router.use(addUserToRequest);
router.use(fileUpload());

router.get('/users', getUsersHandler);
router.post('/options', addOptionHandler);
router.post('/images', addImageHandler);

export default router;
