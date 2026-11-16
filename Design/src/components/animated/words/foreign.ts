import { SPACE } from './chunks';

type Direction = 'ltr' | 'rtl';

const LETTER = /\p{L}/u;

const NUMBER = /^\P{L}*\p{Nd}\P{L}*$/u;

const RIGHT_TO_LEFT = /[\p{Script=Arabic}\p{Script=Hebrew}]/u;

const LEFT_TO_RIGHT_MARK = /\u200e/;

// A letter that changes shape beside its neighbours, a mark that sits on the
// letter before it, or half of a two-part character can't stand alone.
const BOUND =
  /[\p{Mark}\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Nko}\u{10000}-\u{10ffff}]/u;

const FOREIGN = {
  ltr: (chunk: string) => {
    return RIGHT_TO_LEFT.test(chunk);
  },
  rtl: (chunk: string) => {
    return (
      (LETTER.test(chunk) || LEFT_TO_RIGHT_MARK.test(chunk)) &&
      !RIGHT_TO_LEFT.test(chunk)
    );
  },
};

const joinForeign = (chunks: string[], direction: Direction) => {
  const isForeign = FOREIGN[direction];

  return chunks.reduce<string[]>((runs, chunk) => {
    const gap = runs.findLastIndex((run) => {
      return !SPACE.test(run);
    });
    const last = runs[gap];
    const joins =
      last !== undefined &&
      runs.length - gap <= 2 &&
      isForeign(last) &&
      (isForeign(chunk) || NUMBER.test(chunk));

    if (!joins) {
      return [...runs, chunk];
    }

    return [...runs.slice(0, gap), [...runs.slice(gap), chunk].join('')];
  }, []);
};

const toDirection = (text: string): Direction => {
  return RIGHT_TO_LEFT.test(text) ? 'rtl' : 'ltr';
};

const splitsIntoLetters = (text: string) => {
  return !BOUND.test(text);
};

export { joinForeign, splitsIntoLetters, toDirection, type Direction };
