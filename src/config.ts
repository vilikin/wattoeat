import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const BASE_PATH = path.join(__dirname, '..', 'db');

export const config = {
  PORT: process.env.PORT,
};

export const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: path.join(BASE_PATH, 'db.sqlite'),
  },

  // SQLite3 can't handle defaults
  useNullAsDefault: true,

  migrations: {
    directory: path.join(BASE_PATH, 'migrations'),
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds'),
  },
};
