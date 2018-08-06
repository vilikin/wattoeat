import * as Knex from 'knex';

exports.seed = async (knex: Knex) => {
  await knex('meals').del();
  await knex('meals').insert([
    { id: 1, name: 'Puuro', image: null, added_by: 1 },
    { id: 2, name: 'Maksalaatikko', image: null, added_by: 2 },
    { id: 3, name: 'Pizza', image: null, added_by: 1 },
  ]);
};
