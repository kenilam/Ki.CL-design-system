// Partials
import type { Values } from 'design/mdx/preview/spec';
import { attributeOf } from './attribute-of';
import type { Tag } from './tag';

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
