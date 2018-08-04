import * as express from 'express';
import config from './config';
import router from './router';

const app = express();

app.use('/api', router);

app.listen(config.PORT, () => {
  console.log(`Im listening to ${config.PORT}`);
});
