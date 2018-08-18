import { User } from './user';
import { Image } from './image';

export enum OptionType {
  RESTAURANT,
  HOME,
}

export interface Option {
  id: number;
  name: string;
  image: Image;
  type: OptionType;
  addedBy: User;
}

export interface OptionInsertObject {
  name: string;
  image: number;
  type: OptionType;
  addedBy: number;
}

export interface OptionInsertResultObject extends OptionInsertObject {
  id: number;
}
