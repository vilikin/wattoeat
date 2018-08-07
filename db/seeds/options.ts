import * as Knex from 'knex';

exports.seed = async (knex: Knex) => {
  await knex('options').del();
  await knex('options').insert([
    { id: 1, name: 'Puuro', image: null, added_by: 1, type: 'HOME' },
    { id: 2, name: 'Maksalaatikko', image: null, added_by: 2, type: 'HOME' },
    { id: 3, name: 'Pizza', image: null, added_by: 1, type: 'HOME' },
    { id: 4, name: 'Pancho', image: null, added_by: 1, type: 'RESTAURANT' },
    { id: 5, name: 'Hese', image: null, added_by: 2, type: 'RESTAURANT' },
    { id: 6, name: 'Subi', image: null, added_by: 1, type: 'RESTAURANT' },
  ]);
};
