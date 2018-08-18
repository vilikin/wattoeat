import * as knexInstance from 'knex';
import * as knexStringcase from 'knex-stringcase';
import * as path from 'path';

const BASE_PATH = path.join(__dirname, '..', 'db');

let knexConnection;

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

export function getKnexConnection() {
  if (!knexConnection) {
    const options = knexStringcase(knexConfig);
    knexConnection = knexInstance(options);
  }

  return knexConnection;
}
