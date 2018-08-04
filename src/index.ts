import * as express from 'express';
import { config, knexConfig } from './config';
import * as knexInstance from 'knex';

const knex = knexInstance(knexConfig);

const app = express();

app.get('/users', async (req, res) => {
  try {
    const users = await knex('users');
    res.json(users);
  } catch {
    res.status(500);
    res.json({
      message: 'Something went wrong',
    });
  }
});

app.listen(config.PORT, () => {
  console.log(`Im listening to ${config.PORT}`);
});
