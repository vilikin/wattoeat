import { User } from './user';
import { Option } from './option';

export enum RoundStatus {
  COMPLETED,
  CANCELED,
  IN_PROGRESS,
}

interface Votes {
  [index: number]: number;
}

interface UserVotes extends User {
  votes: Votes;
}

export interface Round {
  id: number;
  status: RoundStatus;
  missingVotesFrom: User[];
  wonBy?: Option;
  votes: UserVotes[];
  startedAt: Date;
  endedAt?: Date;
}
