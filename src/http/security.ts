import { Request, Response, NextFunction } from 'express';
import config from '../config';

export function securityHandler(req: Request, res: Response, next: NextFunction) {
  const requestSecret = req.headers.authorization;

  if (!requestSecret) {
    res.status(403);
    res.json({
      message: 'Authorization header pls',
    });

    return;
  }

  if (requestSecret !== config.SECRET) {
    res.status(403);
    res.json({
      message: 'Correct authorization header pls',
    });

    return;
  }

  next();
}
