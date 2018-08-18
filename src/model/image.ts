import { User } from './user';
import * as _ from 'lodash';

export interface ImageWithoutId {
  fileName: string;
  addedBy: User;
}

export interface Image extends ImageWithoutId {
  id: number;
}

export function dbToImage(image: any): Image {
  if (!image) return null;

  return _.pick(image, 'id', 'fileName', 'addedBy');
}

export function imageToDb(image: ImageWithoutId) {
  return {
    ...image,
    addedBy: image.addedBy.id,
  };
}
