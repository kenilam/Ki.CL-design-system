import React from 'react';

// Components
import { Heading, Layout, List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { Section } from './section';

// Constants
import { SECTIONS } from 'design/docs/sections';

const Explore: React.FunctionComponent = () => {
  const t = useCopy();
  const { isNarrow } = useResponsive();

  return (
    <Layout gap='normal'>
      <section>
        <Heading is='h2'>{t('docs_explore')}</Heading>
        <List fill={isNarrow ? 12 : 4} gap='normal'>
          {SECTIONS.map(({ path }) => {
            return <Section key={path} path={path} />;
          })}
        </List>
      </section>
    </Layout>
  );
};

export { Explore };
