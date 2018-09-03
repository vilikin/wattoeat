import * as _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { getUserById } from '../core/user-core';
import { User } from '../model/user';

export async function userMiddleware(req: Request, res: Response, next: NextFunction) {
  const idRaw = req.headers['x-user-id'];

  if (!idRaw) {
    res.boom.forbidden('User id is required as an x-user-id header');
    return;
  }

  const idString = _.isString(idRaw) ? idRaw : _.first(idRaw);
  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    res.boom.forbidden('User id must be a number');
    return;
  }

  try {
    const user: User = await getUserById(id);

    if (!user) {
      res.boom.forbidden('User with given id does not exist');
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    res.boom.badImplementation('Database query for user failed');
  }
}
