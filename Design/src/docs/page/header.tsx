import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Routes
import { useParams } from 'react-router-dom';

// Components
import {
  Button,
  CardTitle,
  HyperLink,
  Layout,
  List,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  Text,
} from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Status
import { Status404 } from 'design/status';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { PAGES } from 'design/docs/pages';

// Partials
import { Sidebar } from 'design/docs/sidebar';

const MENU_ID = 'kicl-docs-menu';

/** A component's page: the menu and where it sits, its name, and its MDX. */
const Header: React.FunctionComponent = () => {
  const t = useCopy();
  const path = useDocsPath();
  const { page: slug } = useParams();
  const { isMobile } = useResponsive();

  const page = PAGES.find((page) => page.slug === slug);

  if (!page) {
    return <Status404 />;
  }

  const { context } = page;
  const name = t('component', { context });

  const menu = {
    'aria-label': t('docs_components_open'),
    children: <Ri.RiMenuLine aria-hidden />,
    className: 'kicl-border-radius-sm',
    size: 'small',
    variant: 'ghost',
  } as const;

  return (
    <Layout alignItems='center' autoFlow='column' justifyContent='start'>
      <header
        className={classNames(
          'kicl-inset-block-start-header',
          'kicl-padding-block-narrow',
          'kicl-position-sticky',
          'kicl-z-index-floating'
        )}
      >
        <span
          className={classNames(
            'kicl-backdrop-blur',
            'kicl-inset-block-0',
            'kicl-inset-inline-screen',
            'kicl-position-absolute',
            'kicl-z-index-behind'
          )}
        />
        {isMobile ? (
          <>
            <Button {...menu} popoverTarget={MENU_ID} />
            <Sheet
              header={<CardTitle is='h2'>{t('docs_components')}</CardTitle>}
              id={MENU_ID}
              side='inline-start'
            >
              <Sidebar />
            </Sheet>
          </>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Button {...menu} />
            </PopoverTrigger>
            <PopoverContent
              offset='wide'
              placement='inline-start-start'
              style={
                {
                  '--kicl--components--popover--fallbacks':
                    '--kicl--components--popover--block-end--start',
                  '--kicl--components--popover--fallback-offset':
                    'var(--kicl-gutter-narrow)',
                } as React.CSSProperties
              }
            >
              <Sidebar />
            </PopoverContent>
          </Popover>
        )}
        <nav aria-label={t('docs_breadcrumb')}>
          <List
            alignItems='center'
            autoFlow='column'
            gap='narrower'
            is='ol'
            justifyContent='start'
          >
            <ListItem>
              <HyperLink to={path()}>{t('docs_overview')}</HyperLink>
            </ListItem>
            <ListItem alignItems='center' autoFlow='column' gap='narrower'>
              <Ri.RiArrowRightSLine aria-hidden />
              {/* The crumb the reader is on: bold, and not a link, since it goes nowhere. */}
              <Text
                aria-current='page'
                className='kicl-font-weight-bold'
                is='span'
              >
                {name}
              </Text>
            </ListItem>
          </List>
        </nav>
      </header>
    </Layout>
  );
};

export { Header };
