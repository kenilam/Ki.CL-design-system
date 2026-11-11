import { useMemo, useState } from 'react';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Constants
import { TOKENS_PATH } from 'design/docs/paths';

// Partials
import { namesIn, pageFor } from 'design/docs/search/constants';
import {
  COMPONENT_PAGES,
  PATTERN_PAGES,
  SECTION_NAMES,
  TOKEN_PAGES,
} from './pages';
import { readStyles } from './read-styles';

// Spec
import type { Entry } from 'design/docs/search/spec';

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

export { useEntries };
