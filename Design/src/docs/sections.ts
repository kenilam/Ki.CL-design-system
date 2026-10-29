import * as Ri from 'react-icons/ri';

// Components
import type { Crumb } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/docs/context';

// Constants
import { PATH as COMPONENTS_PATH } from 'design/docs/components/constants';
import { PATH as PATTERNS_PATH } from 'design/docs/patterns/constants';
import { PATH as TOKENS_PATH } from 'design/docs/tokens/constants';

const SECTIONS = [
  {
    Icon: Ri.RiShapesLine,
    path: COMPONENTS_PATH,
    summary: 'docs_components_summary',
    title: 'docs_components',
  },
  {
    Icon: Ri.RiPaletteLine,
    path: TOKENS_PATH,
    summary: 'docs_tokens_summary',
    title: 'docs_tokens',
  },
  {
    Icon: Ri.RiPuzzle2Line,
    path: PATTERNS_PATH,
    summary: 'docs_patterns_summary',
    title: 'docs_patterns',
  },
] as const;

type Section = (typeof SECTIONS)[number];

const useDocsCrumbs = (path: Section['path'], category?: string): Crumb[] => {
  const t = useCopy();
  const { parsePath } = useDocsContext();

  const siblings = SECTIONS.map((section) => {
    return {
      name: t(section.title),
      to: parsePath(section.path),
    };
  });

  return [
    { name: t('docs_design_system'), to: parsePath() },
    { name: t(`docs_${path}`), siblings, to: parsePath(path) },
    ...(category ? [{ name: category }] : []),
  ];
};

export { SECTIONS, useDocsCrumbs };
