import type { Value, Values } from './controls';

const SPREAD = '{...props}';

type Attribute = {
  /** Empty for a spread other than `{...props}`, which is kept as it is. */
  name: string;
  raw: string;
};

export type Tag = {
  start: number;
  end: number;
  name: string;
  attributes: Attribute[];
  closing: string;
  multiline: boolean;
  /** Before each attribute on a multiline tag. */
  indent: string;
  /** Before the tag's name and its closing. */
  lineIndent: string;
};

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

const parseTag = (source: string, start: number) => {
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

const valueOf = ({ raw }: Attribute): Value => {
  const match = /^[\w.:-]+(?:=(.*))?$/s.exec(raw);
  const value = match?.[1];

  if (value === undefined) {
    return true;
  }

  if (value === '{true}' || value === '{false}') {
    return value === '{true}';
  }

  if (/^\{\d+\}$/.test(value)) {
    return Number(value.slice(1, -1));
  }

  return /^(['"]).*\1$/s.test(value) ? value.slice(1, -1) : undefined;
};

export const valuesOf = (tag: Tag | null, names: string[]) => {
  const values: Values = {};
  const literals = new Set<string>();

  for (const attribute of tag?.attributes ?? []) {
    if (!names.includes(attribute.name)) {
      continue;
    }

    const value = valueOf(attribute);

    if (value !== undefined) {
      values[attribute.name] = value;
      literals.add(attribute.name);
    }
  }

  return { literals, values };
};

const attributeOf = (name: string, value: Value) => {
  if (value === true) {
    return name;
  }

  if (typeof value === 'number') {
    return `${name}={${value}}`;
  }

  if (typeof value !== 'string') {
    return null;
  }

  return value.includes(`'`) ? `${name}={\`${value}\`}` : `${name}='${value}'`;
};

export const withValues = (
  source: string,
  tag: Tag | null,
  literals: Set<string>,
  values: Values
) => {
  if (!tag) {
    return source;
  }

  const chosen = Object.entries(values).flatMap(([name, value]) => {
    // A flag the file wrote may default to on, so turning it off is written.
    const attribute =
      value === false && literals.has(name)
        ? `${name}={false}`
        : attributeOf(name, value);

    return attribute ? [{ attribute, name }] : [];
  });
  // Replaces what the file wrote for that prop, expressions included, as the
  // spread does at render.
  const replaced = new Set(
    chosen.map(({ name }) => {
      return name;
    })
  );
  const attributes = [
    ...tag.attributes
      .filter(({ name }) => {
        return !literals.has(name) && !replaced.has(name);
      })
      .map(({ raw }) => {
        return raw;
      }),
    ...chosen.map(({ attribute }) => {
      return attribute;
    }),
  ];

  const opening = `<${tag.name}`;
  const text = !attributes.length
    ? `${opening}${tag.closing === '/>' ? ' />' : '>'}`
    : tag.multiline
      ? [
          opening,
          ...attributes.map((attribute) => {
            return `${tag.indent}${attribute}`;
          }),
          `${tag.lineIndent}${tag.closing}`,
        ].join('\n')
      : `${opening} ${attributes.join(' ')}${tag.closing === '/>' ? ' />' : '>'}`;

  return `${source.slice(0, tag.start)}${text}${source.slice(tag.end)}`;
};

const forwardOf = (name: string) => {
  return new RegExp(`(\\s+)${name}=\\{${name}\\}`, 'g');
};

export const forwardedOf = (source: string, names: string[]) => {
  return new Set(
    names.filter((name) => {
      return forwardOf(name).test(source);
    })
  );
};

export const withForwarded = (
  source: string,
  forwarded: Set<string>,
  values: Values
) => {
  let written = source;

  for (const name of forwarded) {
    written = written.replace(forwardOf(name), (_, space: string) => {
      const attribute = attributeOf(name, values[name]);

      return attribute ? `${space}${attribute}` : '';
    });
  }

  return written.replace(
    /^(const Preview(?::[^=]+)? = \()\{([^}]*)\}\)/m,
    (head: string, start: string, list: string) => {
      const body = written.slice(written.indexOf(head) + head.length);
      const kept = list
        .split(',')
        .map((parameter) => {
          return parameter.trim();
        })
        .filter((parameter) => {
          return (
            parameter &&
            !(
              forwarded.has(parameter) &&
              // Read as a value, not written as an attribute's name.
              !new RegExp(`\\b${parameter}\\b(?!=)`).test(body)
            )
          );
        });

      if (!kept.length) {
        return `${start})`;
      }

      return kept.length === 1 && kept[0] === '...props'
        ? `${start}props)`
        : `${start}{ ${kept.join(', ')} })`;
    }
  );
};

const indent = (body: string, by: string) => {
  return body.replace(/^(?=.)/gm, by);
};

export const snippetOf = (source: string) => {
  return source
    .replace(/^import React from 'react';\n/m, '')
    .replace(/^import React, \{/m, 'import {')
    .replace(/^import type [^;]*;\n/gm, '')
    .replace(/^export \{ Preview \};\n?/m, '')
    .replace(/^const Preview(?::[^=]+)? = /m, 'const Preview = ')
    .replace(/^const Preview = \(props\)/m, 'const Preview = ()')
    .replace(/^(const Preview = \(\{.*), \.\.\.props \}\)/m, '$1 })')
    .replace(
      /^(const Preview = \(.*\)) =>\s*\(\n([\s\S]*?)\n\);$/m,
      (_, head: string, body: string) => {
        return `${head} => {\n  return (\n${indent(body, '  ')}\n  );\n};`;
      }
    )
    .replace(
      /^(const Preview = \(.*\)) => (<.*>);$/m,
      (_, head: string, body: string) => {
        return `${head} => {\n  return (\n    ${body}\n  );\n};`;
      }
    )
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};
