import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Animation, Heading, Layout, Text } from '../../../components';

// Copy
import { useCopy } from '../../../locales/use-copy';

// Partials
import { GoBack } from '../go-back';
import { Message } from './message';

const CLASS_NAME = 'kicl--router--http-status--404';

const Status404: React.FunctionComponent = () => {
  const t = useCopy();

  const className = classNames(
    'kicl-text-align-center',
    'kicl--router--http-status',
    'kicl-max-inline-size-columns-12',
    CLASS_NAME
  );

  return (
    <Animation>
      <Layout
        alignContent='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        fullScreen
      >
        <section className={className}>
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
