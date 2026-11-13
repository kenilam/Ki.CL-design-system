const SEGMENTER = new Intl.Segmenter(undefined, { granularity: 'word' });

const OPENING = /^[\p{Ps}\p{Pi}]+$/u;

const SPACE = /^\s+$/;

const toChunks = (text: string) => {
  const chunks: string[] = [];
  let open = false;

  for (const { isWordLike, segment } of SEGMENTER.segment(text)) {
    const last = chunks.at(-1);
    const joins =
      last !== undefined &&
      !SPACE.test(last) &&
      !SPACE.test(segment) &&
      (open || !isWordLike);

    if (joins) {
      chunks[chunks.length - 1] = last + segment;
    } else {
      chunks.push(segment);
    }

    open = OPENING.test(segment);
  }

  return chunks;
};

export { SPACE, toChunks };
