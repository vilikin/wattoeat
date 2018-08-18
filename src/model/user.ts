import * as _ from 'lodash';

export interface User {
  id: number;
  name: string;
}

export function dbToUser(user?: any): User {
  if (!user) return null;

  return _.pick(user, 'id', 'name');
}
