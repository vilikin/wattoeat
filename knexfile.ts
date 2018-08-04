import { knexConfig } from './src/knex';

module.exports = {
  development: knexConfig,
  test: knexConfig,
  production: knexConfig,
};
