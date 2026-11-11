// Partials
import type { PresetProps } from 'design/mdx/preview/preset';
import {
  forwardedOf,
  readTags,
  snippetOf,
  withForwarded,
  withValues,
} from 'design/mdx/preview/source';
import type { Values } from 'design/mdx/preview/spec';

/** `With a label` becomes `WithALabel`. */
const identifierOf = (name: string) => {
  return name
    .replace(/(?:^|[^A-Za-z0-9]+)([A-Za-z0-9])/g, (_, first: string) => {
      return first.toUpperCase();
    })
    .replace(/[^A-Za-z0-9]/g, '');
};

export const codeOf = (
  { code, name }: PresetProps,
  literals: Set<string>,
  values: Values,
  slug: string,
  names: string[]
) => {
  // A control the example passes on by name is written there, not on the spread.
  const forwarded = forwardedOf(code, names);
  const spread = Object.fromEntries(
    Object.entries(values).filter(([prop]) => {
      return !forwarded.has(prop);
    })
  );

  return snippetOf(
    withForwarded(
      readTags(code).reduceRight((source, tag) => {
        return withValues(source, tag, literals, spread);
      }, code),
      forwarded,
      values
    )
  ).replace(/\bPreview\b/g, `${identifierOf(slug)}${identifierOf(name)}`);
};
