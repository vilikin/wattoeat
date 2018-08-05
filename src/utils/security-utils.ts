import { Request, Response, NextFunction } from 'express';
import config from '../config';

export function securityHandler(req: Request, res: Response, next: NextFunction) {
  const requestSecret = req.headers.authorization;

  if (!requestSecret) {
    res.boom.forbidden('No Authorization header');
    return;
  }

  if (requestSecret !== config.SECRET) {
    res.boom.forbidden('Incorrect Authorization header');
    return;
  }

  next();
}
