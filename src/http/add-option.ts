import { Request, Response } from 'express';
import { insertOptionToDb } from '../core/options-core';
import { OptionInsertObject } from '../model/option';

export async function addOptionHandler(req: Request, res: Response) {
  const optionInsertObject: OptionInsertObject = {
    addedBy: req.user.id,
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
  };

  try {
    const optionInsertResult = await insertOptionToDb(optionInsertObject);
    res.json(optionInsertResult);
  } catch (err) {
    res.boom.badImplementation();
  }
}
