import React from 'react';

// Libraries
import { useTranslation } from 'react-i18next';

// Components
import { Markdown } from 'design/components';

// Copy
import type en from 'design/locales/en-US/design-docs.json';

// Paths
import { useDocsContext } from 'design/docs/context';

type Key = keyof typeof en;

/** Its own namespace, so the site's every page doesn't load the docs' prose. */
const useDocsCopy = () => {
  const { t } = useTranslation('design-docs');
  const { parsePath } = useDocsContext();

  return (key: Key) => {
    return t(key, { docs: parsePath() });
  };
};

const Copy: React.FunctionComponent<{ id: Key }> = ({ id }) => {
  const t = useDocsCopy();

  return <Markdown>{t(id)}</Markdown>;
};

export { Copy, useDocsCopy };
