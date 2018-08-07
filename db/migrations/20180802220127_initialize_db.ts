import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });

  await knex.schema.createTable('options', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('image');
    table.enum('type', ['RESTAURANT', 'HOME']).notNullable();
    table.integer('added_by').references('id').inTable('users').notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('rounds', (table) => {
    table.increments('id').primary();
    table.integer('won_by').references('id').inTable('options').notNullable();
    table.integer('started_by').references('id').inTable('users').notNullable();
    table.timestamps();
  });

  await knex.schema.createTable('round_options', (table) => {
    table.integer('round').references('id').inTable('rounds').notNullable();
    table.integer('option').references('id').inTable('options').notNullable();

    table.primary(['round', 'option']);
  });

  await knex.schema.createTable('votes', (table) => {
    table.integer('round').references('id').inTable('rounds').notNullable();
    table.integer('user').references('id').inTable('users').notNullable();
    table.integer('option').references('id').inTable('options').notNullable();
    table.integer('points').notNullable();
    table.timestamps();

    table.primary(['round', 'user', 'option']);
  });
};

exports.down = async (knex: Knex) => {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('options');
  await knex.schema.dropTable('rounds');
  await knex.schema.dropTable('round_options');
  await knex.schema.dropTable('votes');
};
