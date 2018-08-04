import * as Knex from 'knex';

exports.up = async (knex: Knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
  });

exports.down = async (knex: Knex) =>
  knex.schema.dropTable('users');
