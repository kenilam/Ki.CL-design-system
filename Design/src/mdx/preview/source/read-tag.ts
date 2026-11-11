// Partials
import { parseTag } from './parse-tag';
import { SPREAD, type Tag } from './tag';

const lineStart = (source: string, index: number) => {
  return source.lastIndexOf('\n', index - 1) + 1;
};

const indentAt = (source: string, index: number) => {
  return /^\s*/.exec(source.slice(lineStart(source, index)))?.[0] ?? '';
};

export const readTag = (source: string, from = 0): Tag | null => {
  const at = source.indexOf(SPREAD, from);

  if (at === -1) {
    return null;
  }

  for (let start = at; start >= 0; start = source.lastIndexOf('<', start - 1)) {
    if (!/[A-Za-z]/.test(source[start + 1] ?? '')) {
      continue;
    }

    const { attributes, closing, end, name, spread } = parseTag(source, start);

    if (spread && end > at) {
      const text = source.slice(start, end);

      return {
        attributes,
        closing,
        end,
        indent: indentAt(source, at),
        lineIndent: indentAt(source, start),
        multiline: text.includes('\n'),
        name,
        start,
      };
    }
  }

  return null;
};

export const readTags = (source: string) => {
  const tags: Tag[] = [];

  for (let tag = readTag(source); tag; tag = readTag(source, tag.end)) {
    tags.push(tag);
  }

  return tags;
};
