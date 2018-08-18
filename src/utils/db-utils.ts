import * as _ from 'lodash';

export function objectToCamelCase(original: object): object {
  return _.mapKeys(original, (value, key) => _.camelCase(key));
}

export function arrayToCamelCase(original: object[]): object[] {
  return _.map(original, objectToCamelCase);
}

export async function getLastInsertedId(knex: any): Promise<number> {
  const result = await knex.raw('select last_insert_rowid()');
  return _.get(result, '[0].lastInsertRowid()', 0);
}
