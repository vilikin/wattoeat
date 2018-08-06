import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });

  await knex.schema.createTable('meals', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('image');
    table.integer('added_by').references('id').inTable('users').notNullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('rounds', (table) => {
    table.increments('id').primary();
    table.integer('won_by').references('id').inTable('meals').notNullable();
    table.integer('started_by').references('id').inTable('users').notNullable();
    table.timestamps();
  });

  await knex.schema.createTable('round_meals', (table) => {
    table.integer('round').references('id').inTable('rounds').notNullable();
    table.integer('meal').references('id').inTable('meals').notNullable();

    table.primary(['round', 'meal']);
  });

  await knex.schema.createTable('votes', (table) => {
    table.integer('round').references('id').inTable('rounds').notNullable();
    table.integer('user').references('id').inTable('users').notNullable();
    table.integer('meal').references('id').inTable('meals').notNullable();
    table.integer('points').notNullable();
    table.timestamps();

    table.primary(['round', 'user', 'meal']);
  });
};

exports.down = async (knex: Knex) => {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('meals');
  await knex.schema.dropTable('rounds');
  await knex.schema.dropTable('round_meals');
  await knex.schema.dropTable('votes');
};
