import { Request, Response } from 'express';
import { User } from '../model/user';
import { getUsers } from '../core/user-core';

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users: User[] = await getUsers();
    res.json(users);
  } catch (err) {
    res.boom.badImplementation();
  }
}
