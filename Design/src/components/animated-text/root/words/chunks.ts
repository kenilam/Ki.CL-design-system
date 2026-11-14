const SEGMENTER = new Intl.Segmenter(undefined, { granularity: 'word' });

const OPENING = /^[\p{Ps}\p{Pi}]+$/u;

const NO_BREAK = /[\u00a0\u202f]$/;

const SPACE = /^[^\S\u00a0\u202f]+$/;

const toChunks = (text: string) => {
  const chunks: string[] = [];
  let open = false;

  for (const { isWordLike, segment } of SEGMENTER.segment(text)) {
    const last = chunks.at(-1);
    const joins =
      last !== undefined &&
      !SPACE.test(last) &&
      !SPACE.test(segment) &&
      (open || !isWordLike || NO_BREAK.test(last));

    if (joins) {
      chunks[chunks.length - 1] = last + segment;
    } else {
      chunks.push(segment);
    }

    open = OPENING.test(segment);
  }

  return chunks;
};

const toParts = (text: string) => {
  let order = 0;
  let start = 0;

  return text.split('**').map((value, index) => {
    const chunks = toChunks(value);
    const part = { chunks, order, start, strong: index % 2 === 1 };

    order += chunks.filter((chunk) => {
      return !SPACE.test(chunk);
    }).length;
    start += value.length;

    return part;
  });
};

export { SPACE, toChunks, toParts };
