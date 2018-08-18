import { Request, Response } from 'express';
import {
  generateLocalFileName,
  addImageToDb,
} from '../core/image-core';
import { ImageWithoutId } from '../model/image';

export async function addImageHandler(req: Request, res: Response) {
  const { image: imageFile } = req.files;

  if (!imageFile) {
    res.boom.badRequest('Image not found from the request');
    return;
  }

  try {
    const localFileName = generateLocalFileName(imageFile.name);
    imageFile.mv(process.cwd() + `/images/${localFileName}`);
    const imageWithoutId: ImageWithoutId = {
      fileName: localFileName,
      addedBy: req.user,
    };

    const image = await addImageToDb(imageWithoutId);
    res.json(image);
  } catch (err) {
    res.boom.badImplementation();
  }
}
