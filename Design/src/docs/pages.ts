import { lazy } from 'react';

import type { MDXContent } from 'mdx/types';

// Constants
import { CATEGORIES, type Category } from './constants';

type Load = () => Promise<{ default: MDXContent }>;

// Each page loads when it is opened, not with the remote.
const files = import.meta.glob<{ default: MDXContent }>(
  '../components/*/docs/index.mdx'
);

const loaders = Object.fromEntries(
  Object.entries(files).map(([file, load]) => [file.split('/')[2], load])
) as Record<string, Load>;

type Page = {
  category: Category;
  Content: React.LazyExoticComponent<MDXContent>;
  /** The page's name is copy: `t('component', { context })`. */
  context: string;
  slug: string;
};

export const PAGES: Page[] = Object.entries(CATEGORIES).flatMap(
  ([category, slugs]) =>
    slugs
      .filter((slug) => loaders[slug])
      .map((slug) => ({
        category: category as Category,
        Content: lazy(loaders[slug]),
        context: slug.replace(/-/g, '_'),
        slug,
      }))
);

export const pagesIn = (category: Category) =>
  PAGES.filter((page) => page.category === category);
