// Partials
import type { Values } from 'design/mdx/preview/spec';
import { attributeOf } from './attribute-of';

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
