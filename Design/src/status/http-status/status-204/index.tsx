import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Animation, Heading, Layout, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Props } from 'design/status/http-status/spec';

// Partials
import { GoBack } from 'design/status/http-status/go-back';

const Status204: React.FunctionComponent<Props> = ({ message, title }) => {
  const t = useCopy();

  return (
    <Animation>
      <Layout
        alignContent='center'
        autoFlow='row'
        justifyItems='center'
        fullScreen
      >
        <section className='kicl-max-inline-size-columns-12 kicl-text-align-center'>
          <Layout
            alignContent='center'
            alignItems='center'
            justifyContent='center'
            justifyItems='center'
          >
            <Text lookLike='h1'>
              <Ri.RiFileUnknowLine
                aria-hidden
                className='kicl-font-size-extreme'
              />
              {t('something_not_right')}
            </Text>
          </Layout>
          <Heading is='h1' lookLike='h2'>
            {t('title_204')}
          </Heading>
          {title ? (
            <Heading is='h2' lookLike='h4'>
              {title}
            </Heading>
          ) : null}
          <Text>{message}</Text>
          <GoBack />
        </section>
      </Layout>
    </Animation>
  );
};

export { Status204 };
