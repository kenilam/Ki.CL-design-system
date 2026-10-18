import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Animation, Heading, Layout, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { GoBack } from 'design/status/http-status/go-back';
import { Message } from './message';

const Status404: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Animation>
      <Layout
        alignContent='center'
        alignItems='center'
        justifyContent='center'
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
              <Ri.RiLandscapeLine
                aria-hidden
                className='kicl-font-size-extreme'
              />
              {t('something_not_right')}
            </Text>
          </Layout>
          <Heading is='h1' lookLike='h2'>
            {t('title_404')}
          </Heading>
          <Message />
          <GoBack />
        </section>
      </Layout>
    </Animation>
  );
};

export { Status404 };
