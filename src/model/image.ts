import { User } from './user';
import * as _ from 'lodash';

export interface Image {
  id: number;
  fileName: string;
  addedBy: User;
}

export interface ImageInsertObject {
  fileName: string;
  addedBy: number;
}

export interface ImageInsertResultObject extends ImageInsertObject {
  id: number;
}

export function dbToImage(image: any): Image {
  if (!image) return null;

  return _.pick(image, 'id', 'fileName', 'addedBy');
}
