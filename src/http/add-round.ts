import { Request, Response } from 'express';
import { startNewRound } from '../core/round-core';

export async function addRoundHandler(req: Request, res: Response) {
  try {
    const roundId = await startNewRound(req.user.id);
    res.json({ roundId });
  } catch (err) {
    res.boom.badImplementation();
  }
}
