import { SPACE, toChunks } from './chunks';
import { joinForeign, type Direction } from './foreign';

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;

const STRONG = '**';

const toLinked = (text: string) => {
  const parts = text.split(LINK);
  const shown = parts.flatMap((part, index) => {
    return index % 3 === 2
      ? []
      : [{ link: index % 3 === 1 ? (index - 1) / 3 : null, text: part }];
  });

  return {
    hrefs: parts.filter((_, index) => {
      return index % 3 === 2;
    }),
    labels: parts
      .filter((_, index) => {
        return index % 3 === 1;
      })
      .map((label) => {
        return label.replaceAll(STRONG, '');
      }),
    links: shown.flatMap(({ link, text: part }) => {
      return part.split('').map(() => {
        return link;
      });
    }),
    shown: shown
      .map(({ text: part }) => {
        return part;
      })
      .join(''),
  };
};

const toMarked = (text: string) => {
  const { hrefs, labels, links, shown } = toLinked(text);
  const sections = shown.split(STRONG);

  return {
    hrefs,
    labels,
    links: sections.flatMap((section, index) => {
      const start =
        sections.slice(0, index).join(STRONG).length +
        (index > 0 ? STRONG.length : 0);

      return section.split('').map((_, place) => {
        return links[start + place];
      });
    }),
    marks: sections.flatMap((section, index) => {
      return section.split('').map(() => {
        return index % 2 === 1 ? (index - 1) / 2 : null;
      });
    }),
    plain: sections.join(''),
  };
};

type Marked = Pick<ReturnType<typeof toMarked>, 'links' | 'marks'>;

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

type Piece = ReturnType<typeof toPieces>[number];

type Run = { link: number | null; pieces: Piece[] };

const toRuns = (pieces: Piece[], links: Marked['links']) => {
  return pieces.reduce<Run[]>((runs, piece) => {
    const last = runs.at(-1);
    const link =
      links
        .slice(piece.offset, piece.offset + piece.text.length)
        .find((each) => {
          return each !== null;
        }) ?? null;

    if (last?.link !== link) {
      return [...runs, { link, pieces: [piece] }];
    }

    return [...runs.slice(0, -1), { link, pieces: [...last.pieces, piece] }];
  }, []);
};

type Span = {
  at: number;
  link: number | null;
  strong: number | null;
  text: string;
};

const toSpans = (text: string, { links, marks }: Marked, offset: number) => {
  return text.split('').reduce<Span[]>((spans, letter, place) => {
    const last = spans.at(-1);
    const link = links[offset + place] ?? null;
    const strong = marks[offset + place] ?? null;

    if (last?.link !== link || last.strong !== strong) {
      return [...spans, { at: offset + place, link, strong, text: letter }];
    }

    return [...spans.slice(0, -1), { ...last, text: last.text + letter }];
  }, []);
};

export { toMarked, toPieces, toRuns, toSpans, type Piece };
