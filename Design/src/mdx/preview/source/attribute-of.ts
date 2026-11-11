// Partials
import type { Value } from 'design/mdx/preview/spec';

export const attributeOf = (name: string, value: Value) => {
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
