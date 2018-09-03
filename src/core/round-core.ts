import * as _ from 'lodash';
import { getKnexConnection } from '../knex';
import { getLastInsertedId } from '../utils/db-utils';

const knex = getKnexConnection();

export async function startNewRound(startedBy: number): Promise<number> {
  await cancelUncompletedRounds();
  await knex('rounds')
    .insert({ startedBy });

  return getLastInsertedId(knex);
}

export async function cancelUncompletedRounds() {
  return knex.raw(`
    UPDATE rounds
    SET canceled_at = CURRENT_TIMESTAMP
    WHERE canceled_at IS NULL
    AND completed_at IS NULL
  `);
}
