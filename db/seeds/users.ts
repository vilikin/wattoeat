import * as Knex from 'knex';

exports.seed = async (knex: Knex) => {
  await knex('users').del();
  await knex('users').insert([
    { id: 1, name: 'user' },
    { id: 2, name: 'admin' },
    { id: 3, name: 'somebody' },
  ]);
};
