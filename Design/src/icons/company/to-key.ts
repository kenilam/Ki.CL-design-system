// Spec
import type { Name } from './spec';

type Snake<Text extends string> = Text extends `${infer Head}${infer Tail}`
  ? `${Head extends Lowercase<Head> ? Head : `_${Lowercase<Head>}`}${Snake<Tail>}`
  : Text;

export const toKey = <Source extends NonNullable<Name>>(name: Source) => {
  return `company_${name.replace(/[A-Z]/g, (letter) => {
    return `_${letter.toLowerCase()}`;
  })}` as `company_${Snake<Source>}`;
};
