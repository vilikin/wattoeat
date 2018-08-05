import * as _ from 'lodash';

export function objectToCamelCase(original: object): object {
  return _.mapKeys(original, (value, key) => _.camelCase(key));
}

export function arrayToCamelCase(original: object[]): object[] {
  return _.map(original, objectToCamelCase);
}
