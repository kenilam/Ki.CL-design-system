import React from 'react';

import classNames from 'classnames';

import * as Ri from 'react-icons/ri';

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

import { useResponsive } from 'design/hooks';

import { useLocation } from 'design/router';

import { useCopy } from 'design/locales/use-copy';

import { useDocsContext } from 'design/docs/context';

import { Sidebar } from 'design/docs/components/sidebar';
import { PATH } from 'design/docs/components/constants';

import { useComponentContext } from './use-component-context';

const MENU_ID = 'kicl-docs-menu';

const Header: React.FunctionComponent = () => {
  const { parsePath } = useDocsContext();
  const { isMobile } = useResponsive();
  const { pathname } = useLocation();
  const t = useCopy();
  const { name } = useComponentContext();

  const Trigger = (
    <Button
      aria-label={t('docs_components_open')}
      className='kicl-border-radius-sm'
      size='small'
      variant='secondary'
      popoverTarget={isMobile ? MENU_ID : undefined}
    >
      <Ri.RiMenuLine aria-hidden />
    </Button>
  );

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
          aria-hidden
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
            {Trigger}
            <Sheet
              key={pathname}
              header={<CardTitle is='h2'>{t('docs_components')}</CardTitle>}
              id={MENU_ID}
              side='inline-start'
            >
              <Sidebar />
            </Sheet>
          </>
        ) : (
          <Popover>
            <PopoverTrigger asChild>{Trigger}</PopoverTrigger>
            <PopoverContent
              className='kicl-inline-size-xxl'
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
              <HyperLink to={parsePath(PATH)}>{t('docs_overview')}</HyperLink>
            </ListItem>
            <ListItem alignItems='center' autoFlow='column' gap='narrower'>
              <Ri.RiArrowRightSLine aria-hidden />
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
