import React from 'react';

// Libraries
import classNames from 'classnames';
import * as Ri from 'react-icons/ri';

// Components
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Heading,
  HyperLink,
  Layout,
  List,
  Text,
} from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { COMPONENTS, Pre } from 'design/docs/mdx';
import Motivation from './motivation.mdx';

// Paths
import { useDocsContext } from 'design/docs/context';

// Constants
import { PATH as COMPONENTS_PATH } from 'design/docs/components/constants';
import { PATH as PATTERNS_PATH } from 'design/docs/patterns/constants';
import { PATH as TOKENS_PATH } from 'design/docs/tokens/constants';

const SECTIONS = [
  {
    Icon: Ri.RiShapesLine,
    path: COMPONENTS_PATH,
    summary: 'docs_components_summary',
    title: 'docs_components',
  },
  {
    Icon: Ri.RiPaletteLine,
    path: TOKENS_PATH,
    summary: 'docs_tokens_summary',
    title: 'docs_tokens',
  },
  {
    Icon: Ri.RiPuzzle2Line,
    path: PATTERNS_PATH,
    summary: 'docs_patterns_summary',
    title: 'docs_patterns',
  },
] as const;

const Home: React.FunctionComponent = () => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { isMobile } = useResponsive();

  return (
    <Layout alignContent='start' gap='wider'>
      <article>
        <Layout gap='normal'>
          <header>
            <Heading>{t('docs_title')}</Heading>
            <Text className='kicl-max-inline-size-columns-8'>
              {t('docs_home_intro')}
            </Text>
          </header>
        </Layout>
        <Layout gap='normal'>
          <section>
            <Motivation components={{ ...COMPONENTS, pre: Pre }} />
          </section>
        </Layout>
        <Layout gap='normal'>
          <section>
            <Heading is='h2'>{t('docs_explore')}</Heading>
            <List fill={isMobile ? 12 : 4} gap='normal'>
              {SECTIONS.map(({ Icon, path, summary, title }) => (
                <Card is='li' key={path}>
                  <Layout alignItems='center' justifyContent='center'>
                    <div
                      aria-hidden
                      className={classNames(
                        'kicl-aspect-ratio-video',
                        'kicl-background-color-black-pure',
                        'kicl-border-radius-sm',
                        'kicl-color-white',
                        'kicl-font-size-largest'
                      )}
                    >
                      <Icon />
                    </div>
                  </Layout>
                  <CardHeader>
                    <CardTitle is='h3'>
                      <HyperLink to={parsePath(path)}>{t(title)}</HyperLink>
                    </CardTitle>
                    <CardDescription>{t(summary)}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </List>
          </section>
        </Layout>
      </article>
    </Layout>
  );
};

export { Home };
