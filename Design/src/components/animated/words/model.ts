import { SPACE, toChunks } from './chunks';
import { joinForeign, type Direction } from './foreign';

const toMarked = (text: string) => {
  const sections = text.split('**');

  return {
    marks: sections.flatMap((section, index) => {
      return section.split('').map(() => {
        return index % 2 === 1 ? (index - 1) / 2 : null;
      });
    }),
    plain: sections.join(''),
  };
};

type Marks = ReturnType<typeof toMarked>['marks'];

const toPieces = (plain: string, direction: Direction) => {
  const chunks = joinForeign(toChunks(plain), direction);

  return chunks.map((text, index) => {
    const before = chunks.slice(0, index);
    const space = SPACE.test(text);

    return {
      joined: index > 0 && !space && !SPACE.test(chunks[index - 1]),
      offset: before.join('').length,
      order: before.filter((chunk) => {
        return !SPACE.test(chunk);
      }).length,
      space,
      text,
    };
  });
};

type Span = { at: number; strong: number | null; text: string };

const toSpans = (text: string, marks: Marks, offset: number) => {
  return text.split('').reduce<Span[]>((spans, letter, place) => {
    const last = spans.at(-1);
    const strong = marks[offset + place] ?? null;

    if (last?.strong !== strong) {
      return [...spans, { at: offset + place, strong, text: letter }];
    }

    return [...spans.slice(0, -1), { ...last, text: last.text + letter }];
  }, []);
};

export { toMarked, toPieces, toSpans };
