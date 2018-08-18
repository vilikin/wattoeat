import * as moment from 'moment';
import * as _ from 'lodash';
import { getKnexConnection } from '../knex';
import { getLastInsertedId } from '../utils/db-utils';
import {
  ImageInsertObject,
  ImageInsertResultObject,
} from '../model/image';

const knex = getKnexConnection();

export function generateLocalFileName(originalFileName: string) {
  const timestamp = moment().utc().format();
  return `${timestamp}_${originalFileName}`;
}

export async function insertImageToDb(
  image: ImageInsertObject,
): Promise<ImageInsertResultObject> {
  await knex('images')
    .insert(image);

  const id = await getLastInsertedId(knex);

  return {
    ...image,
    id,
  };
}
