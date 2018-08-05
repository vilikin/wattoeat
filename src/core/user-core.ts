import { getKnexConnection } from '../knex';
import { User, dbToUser } from '../model/user';
import { arrayToCamelCase } from '../utils/db-utils';

const knex = getKnexConnection();

export async function getUsers(): Promise<User[]> {
  const users = await knex('users');
  return arrayToCamelCase(users)
    .map(dbToUser);
}
