import { getKnexConnection } from '../knex';
import { User, dbToUser } from '../model/user';
import * as _ from 'lodash';

const knex = getKnexConnection();

export async function getUsers(): Promise<User[]> {
  const users = await knex('users');
  return users
    .map(dbToUser);
}

export async function getUserById(id: number): Promise<User> {
  const users = await knex('users')
    .where({ id });

  const user = _.first(users);

  return dbToUser(user);
}
