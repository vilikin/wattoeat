import { Request, Response } from 'express';
import {
  generateLocalFileName,
  insertImageToDb,
} from '../core/image-core';
import { ImageInsertObject } from '../model/image';

export async function addImageHandler(req: Request, res: Response) {
  const { image: imageFile } = req.files;

  if (!imageFile) {
    res.boom.badRequest('Image not found from the request');
    return;
  }

  try {
    const localFileName = generateLocalFileName(imageFile.name);
    imageFile.mv(process.cwd() + `/images/${localFileName}`);

    const imageInsertObject: ImageInsertObject = {
      fileName: localFileName,
      addedBy: req.user.id,
    };

    const image = await insertImageToDb(imageInsertObject);
    res.json(image);
  } catch (err) {
    res.boom.badImplementation();
  }
}
