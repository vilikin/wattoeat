import * as moment from 'moment';
import * as _ from 'lodash';
import { getKnexConnection } from '../knex';
import { getLastInsertedId } from '../utils/db-utils';
import {
  OptionInsertObject,
  OptionInsertResultObject,
} from '../model/option';

const knex = getKnexConnection();

export async function insertOptionToDb(
  option: OptionInsertObject,
): Promise<OptionInsertResultObject> {
  await knex('options')
    .insert(option);

  const id = await getLastInsertedId(knex);

  return {
    ...option,
    id,
  };
}
