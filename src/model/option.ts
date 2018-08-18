import { User } from './user';
import { Image } from './image';

export enum OptionType {
  RESTAURANT,
  HOME,
}

export interface Option {
  id: number;
  name: string;
  image?: Image;
  type: OptionType;
  addedBy: User;
}
