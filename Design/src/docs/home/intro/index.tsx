import React from 'react';

// Libraries
import * as Tb from 'react-icons/tb';

// Components
import { Heading, HyperLink, Layout, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Intro: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Layout gap='normal'>
      <header>
        <Heading className='kicl-font-size-huge'>{t('docs_title')}</Heading>
        <Text>
          <HyperLink
            before={<Tb.TbBrandGithub aria-hidden />}
            lookLikeButton
            to={t('url_github')}
            variant='secondary'
          >
            {t('github')}
          </HyperLink>
        </Text>
        <Text className='kicl-max-inline-size-columns-8' lookLike='h3'>
          {t('docs_home_tagline')}
        </Text>
        <Text className='kicl-max-inline-size-columns-8'>
          {t('docs_home_intro')}
        </Text>
      </header>
    </Layout>
  );
};

export { Intro };
