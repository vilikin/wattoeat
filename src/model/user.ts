import * as _ from 'lodash';

export interface User {
  id: number;
  name: string;
}

export function dbToUser(user: any): User {
  return _.pick(user, 'id', 'name');
}
