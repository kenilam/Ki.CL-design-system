import { PAGES, type Category } from 'design/component-pages';
import { useCopy } from 'design/locales/use-copy';
import { useParams } from 'design/router';

type Page = {
  Content: (typeof PAGES)['action']['button']['Content'];
  context: string;
  parts?: Record<string, Page>;
};

export const useComponentContext = () => {
  const t = useCopy();
  const { category = '', component = '', part } = useParams();

  const pages: Record<string, Partial<Record<string, Page>> | undefined> =
    PAGES;

  const page = pages[category]?.[component];
  const [first] = Object.keys(page?.parts ?? {});
  const shown = page?.parts?.[part ?? first] ?? page;

  return {
    category: (Object.keys(PAGES) as Category[]).find((key) => {
      return key === category;
    }),
    Content: shown?.Content,
    name: t('component', { context: shown?.context ?? '' }),
    part: part ?? first,
    parts: Object.keys(page?.parts ?? {}),
  };
};
