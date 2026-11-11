// Partials
import { type Attribute, SPREAD } from './tag';

const QUOTES = new Set(["'", '"', '`']);

const closeBrace = (source: string, from: number) => {
  let depth = 0;

  for (let index = from; index < source.length; index += 1) {
    const char = source[index];

    if (QUOTES.has(char)) {
      index = source.indexOf(char, index + 1);

      continue;
    }

    if (char === '{') {
      depth += 1;

      continue;
    }

    if (char !== '}') {
      continue;
    }

    depth -= 1;

    if (depth === 0) {
      return index + 1;
    }
  }

  return source.length;
};

const closeQuote = (source: string, from: number) => {
  return source.indexOf(source[from], from + 1) + 1;
};

export const parseTag = (source: string, start: number) => {
  const name = /^<([A-Za-z][\w.]*)/.exec(source.slice(start))?.[1] ?? '';
  const attributes: Attribute[] = [];

  let position = start + name.length + 1;
  let spread = false;
  let closing = '>';

  for (;;) {
    while (/\s/.test(source[position] ?? '')) {
      position += 1;
    }

    const rest = source.slice(position, position + 2);

    if (
      rest.startsWith('/>') ||
      rest.startsWith('>') ||
      position >= source.length
    ) {
      closing = rest.startsWith('/>') ? '/>' : '>';
      position += closing.length;

      break;
    }

    const from = position;

    if (source[position] === '{') {
      position = closeBrace(source, position);

      const raw = source.slice(from, position);

      if (raw === SPREAD) {
        spread = true;

        continue;
      }

      attributes.push({ name: '', raw });

      continue;
    }

    const attribute = /^[\w.:-]+/.exec(source.slice(position))?.[0] ?? '';

    position += attribute.length;

    if (source[position] === '=') {
      position += 1;
      position =
        source[position] === '{'
          ? closeBrace(source, position)
          : closeQuote(source, position);
    }

    attributes.push({ name: attribute, raw: source.slice(from, position) });
  }

  return { attributes, closing, end: position, name, spread };
};
