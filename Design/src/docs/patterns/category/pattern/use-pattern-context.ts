import { PAGES, type Category, type Pattern } from 'design/docs/patterns/pages';
import { useCopy } from 'design/locales/use-copy';
import { useParams } from 'design/router';

export const usePatternContext = () => {
  const t = useCopy();
  const { category = '', pattern = '' } = useParams();

  const pages: Record<string, Partial<Record<string, Pattern>> | undefined> =
    PAGES;

  const { context = '', Content } = pages[category]?.[pattern] ?? {};

  return {
    category: (Object.keys(PAGES) as Category[]).find(
      (key) => key === category
    ),
    Content,
    name: t('pattern', { context }),
  };
};
