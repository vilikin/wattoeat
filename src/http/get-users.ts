import { Request, Response } from 'express';

export function getUsersHandler(req: Request, res: Response) {
  res.json([
    'user',
    'another user',
  ]);
}
