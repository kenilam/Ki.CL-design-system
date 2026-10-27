import { useMemo, useState } from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Pages
import { PAGES as COMPONENTS } from 'design/docs/components/pages';
import { PAGES as PATTERNS } from 'design/docs/patterns/pages';
import { PAGES as TOKENS } from 'design/docs/tokens/pages';

// Constants
import { PATH as COMPONENTS_PATH } from 'design/docs/components/constants';
import { PATH as PATTERNS_PATH } from 'design/docs/patterns/constants';
import { PATH as TOKENS_PATH } from 'design/docs/tokens/constants';

import { namesIn, pageFor } from './constants';

type Pages = Record<string, Record<string, { context: string }>>;

type Entry = {
  /** What the reader types: a page's name, a class or a variable. */
  name: string;
  /** The page, relative to the docs. */
  path: string;
  /** Whether `name` is code, a class or a variable. */
  code: boolean;
};

/** Every page in a section, by category and page name. */
const pagesOf = (section: string, pages: Pages) =>
  Object.entries(pages).flatMap(([category, inCategory]) =>
    Object.entries(inCategory).map(([page, { context }]) => ({
      context,
      path: `${section}/${category}/${page}`,
    }))
  );

const SECTION_NAMES: Record<
  string,
  'docs_components' | 'docs_patterns' | 'docs_tokens'
> = {
  [COMPONENTS_PATH]: 'docs_components',
  [PATTERNS_PATH]: 'docs_patterns',
  [TOKENS_PATH]: 'docs_tokens',
};

const COMPONENT_PAGES = pagesOf(COMPONENTS_PATH, COMPONENTS);
const PATTERN_PAGES = pagesOf(PATTERNS_PATH, PATTERNS);
const TOKEN_PAGES = pagesOf(TOKENS_PATH, TOKENS);

/** The text of every stylesheet the page can read. Another origin's throws. */
const readStyles = () =>
  Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules, (rule) => rule.cssText);
      } catch {
        return [];
      }
    })
    .join('\n');

/**
 * Every docs page, and every class and variable in the loaded CSS with the
 * token page that covers it. The names come from the CSS the page loaded, so
 * the list always matches what ships.
 */
const useEntries = () => {
  const t = useCopy();
  const [styles, setStyles] = useState('');

  /** Reads the CSS the first time it's asked, once the field is in use. */
  const load = () => {
    if (!styles) {
      setStyles(readStyles());
    }
  };

  const code = useMemo(() => {
    const { classes, variables } = namesIn(styles);

    const named = (names: Set<string>, prefix: string): Entry[] =>
      Array.from(names).flatMap((name) => {
        const path = pageFor(name);

        return path
          ? [
              {
                code: true,
                name: `${prefix}${name}`,
                path: `${TOKENS_PATH}/${path}`,
              },
            ]
          : [];
      });

    return [...named(classes, 'kicl-'), ...named(variables, '--kicl-')];
  }, [styles]);

  const pages: Entry[] = [
    ...COMPONENT_PAGES.map(({ context, path }) => ({
      code: false,
      name: t('component', { context }),
      path,
    })),
    ...TOKEN_PAGES.map(({ context, path }) => ({
      code: false,
      name: t('token', { context }),
      path,
    })),
    ...PATTERN_PAGES.map(({ context, path }) => ({
      code: false,
      name: t('pattern', { context }),
      path,
    })),
  ];

  /** The line under a result: the token page for code, the section for a page. */
  const describe = ({ code, path }: Entry) => {
    if (!code) {
      return t(SECTION_NAMES[path.split('/')[0]] ?? 'docs_design_system');
    }

    const { context = '' } =
      TOKEN_PAGES.find((page) => page.path === path) ?? {};

    return t('token', { context });
  };

  return { describe, entries: [...pages, ...code], load };
};

export type { Entry };
export { useEntries };
