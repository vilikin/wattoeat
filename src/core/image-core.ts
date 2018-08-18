import * as moment from 'moment';
import * as _ from 'lodash';
import { getKnexConnection } from '../knex';
import { getLastInsertedId } from '../utils/db-utils';
import {
  Image,
  ImageWithoutId,
  imageToDb,
  dbToImage,
} from '../model/image';

const knex = getKnexConnection();

export function generateLocalFileName(originalFileName: string) {
  const timestamp = moment().utc().format();
  return `${timestamp}_${originalFileName}`;
}

export async function addImageToDb(image: ImageWithoutId): Promise<Image> {
  await knex('images')
    .insert(imageToDb(image));

  const id = await getLastInsertedId(knex);

  return {
    ...image,
    id,
  };
}
