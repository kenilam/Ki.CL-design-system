import { PAGES, type Token } from 'design/docs/tokens/pages';
import { useCopy } from 'design/locales/use-copy';
import { useParams } from 'design/router';

export const useTokenContext = () => {
  const t = useCopy();
  const { category = '', token = '' } = useParams();

  const pages: Record<string, Partial<Record<string, Token>> | undefined> =
    PAGES;

  const { context = '', Content } = pages[category]?.[token] ?? {};

  return { Content, name: t('token', { context }) };
};
