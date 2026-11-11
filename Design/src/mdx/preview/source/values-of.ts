// Partials
import type { Value, Values } from 'design/mdx/preview/spec';
import type { Attribute, Tag } from './tag';

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
