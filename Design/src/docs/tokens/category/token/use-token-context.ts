import { PAGES, type Category, type Token } from 'design/docs/tokens/pages';
import { useCopy } from 'design/locales/use-copy';
import { useParams } from 'design/router';

export const useTokenContext = () => {
  const t = useCopy();
  const { category = '', token = '' } = useParams();

  const pages: Record<string, Partial<Record<string, Token>> | undefined> =
    PAGES;

  const { context = '', Content } = pages[category]?.[token] ?? {};

  return {
    category: (Object.keys(PAGES) as Category[]).find(
      (key) => key === category
    ),
    Content,
    name: t('token', { context }),
  };
};
