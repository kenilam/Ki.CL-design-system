import { SPACE } from './chunks';

type Direction = 'ltr' | 'rtl';

const LETTER = /\p{L}/u;

const NUMBER = /^\P{L}*\p{Nd}\P{L}*$/u;

const RIGHT_TO_LEFT = /[\p{Script=Arabic}\p{Script=Hebrew}]/u;

const FOREIGN = {
  ltr: (chunk: string) => {
    return RIGHT_TO_LEFT.test(chunk);
  },
  rtl: (chunk: string) => {
    return LETTER.test(chunk) && !RIGHT_TO_LEFT.test(chunk);
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

export { joinForeign, type Direction };
