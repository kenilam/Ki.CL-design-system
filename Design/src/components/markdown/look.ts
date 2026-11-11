// Libraries
import type { Token } from 'marked';

// Spec
import type { Look } from './spec';

export const LOOK = /^\{(confirm|error|info|secondary|warning)\}/;

export const lookOf = (token?: Token) => {
  return token?.type === 'text'
    ? (LOOK.exec(token.text)?.[1] as Look | undefined)
    : undefined;
};
