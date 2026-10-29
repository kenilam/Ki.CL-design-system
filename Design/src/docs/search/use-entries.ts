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
  name: string;
  /** Relative to the docs. */
  path: string;
  code: boolean;
};

const pagesOf = (section: string, pages: Pages) => {
  return Object.entries(pages).flatMap(([category, inCategory]) => {
    return Object.entries(inCategory).map(([page, { context }]) => {
      return {
        context,
        path: `${section}/${category}/${page}`,
      };
    });
  });
};

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

/** Another origin's stylesheet throws on `cssRules`. */
const readStyles = () => {
  return Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules, (rule) => {
          return rule.cssText;
        });
      } catch {
        return [];
      }
    })
    .join('\n');
};

const useEntries = () => {
  const t = useCopy();
  const [styles, setStyles] = useState('');

  const load = () => {
    if (!styles) {
      setStyles(readStyles());
    }
  };

  const code = useMemo(() => {
    const { classes, variables } = namesIn(styles);

    const named = (names: Set<string>, prefix: string): Entry[] => {
      return Array.from(names).flatMap((name) => {
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
    };

    return [...named(classes, 'kicl-'), ...named(variables, '--kicl-')];
  }, [styles]);

  const pages: Entry[] = [
    ...COMPONENT_PAGES.map(({ context, path }) => {
      return {
        code: false,
        name: t('component', { context }),
        path,
      };
    }),
    ...TOKEN_PAGES.map(({ context, path }) => {
      return {
        code: false,
        name: t('token', { context }),
        path,
      };
    }),
    ...PATTERN_PAGES.map(({ context, path }) => {
      return {
        code: false,
        name: t('pattern', { context }),
        path,
      };
    }),
  ];

  const describe = ({ code, path }: Entry) => {
    if (!code) {
      return t(SECTION_NAMES[path.split('/')[0]] ?? 'docs_design_system');
    }

    const { context = '' } =
      TOKEN_PAGES.find((page) => {
        return page.path === path;
      }) ?? {};

    return t('token', { context });
  };

  return { describe, entries: [...pages, ...code], load };
};

export type { Entry };
export { useEntries };
