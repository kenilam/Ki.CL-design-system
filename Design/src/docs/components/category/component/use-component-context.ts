import { PAGES, type Component } from 'design/docs/components/pages';
import { useCopy } from 'design/locales/use-copy';
import { useParams } from 'design/router';

export const useComponentContext = () => {
  const t = useCopy();
  const { category = '', component = '' } = useParams();

  const pages: Record<string, Partial<Record<string, Component>> | undefined> =
    PAGES;

  const { context = '', Content } = pages[category]?.[component] ?? {};

  return { Content, name: t('component', { context }) };
};
