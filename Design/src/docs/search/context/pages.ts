// Pages
import { PAGES as COMPONENTS } from 'design/component-pages';
import { PAGES as PATTERNS } from 'design/pattern-pages';
import { PAGES as TOKENS } from 'design/token-pages';

// Constants
import { COMPONENTS_PATH } from 'design/docs/paths';
import { PATTERNS_PATH } from 'design/docs/paths';
import { TOKENS_PATH } from 'design/docs/paths';

type Pages = Record<string, Record<string, { context: string }>>;

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

export const SECTION_NAMES: Record<
  string,
  'docs_components' | 'docs_patterns' | 'docs_tokens'
> = {
  [COMPONENTS_PATH]: 'docs_components',
  [PATTERNS_PATH]: 'docs_patterns',
  [TOKENS_PATH]: 'docs_tokens',
};

export const COMPONENT_PAGES = pagesOf(COMPONENTS_PATH, COMPONENTS);
export const PATTERN_PAGES = pagesOf(PATTERNS_PATH, PATTERNS);
export const TOKEN_PAGES = pagesOf(TOKENS_PATH, TOKENS);
