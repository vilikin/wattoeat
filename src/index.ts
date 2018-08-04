import * as express from 'express';
import config from './config';

const app = express();

app.listen(config.PORT, () => {
  console.log(`Im listening to ${config.PORT}`);
});
