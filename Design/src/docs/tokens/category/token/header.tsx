import React from 'react';

import classNames from 'classnames';

import * as Ri from 'react-icons/ri';

import {
  Breadcrumb,
  HomeLink,
  Button,
  CardTitle,
  Layout,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Sheet,
  SheetFooter,
} from 'design/components';

import { useResponsive } from 'design/hooks';

import { useLocation } from 'design/router';

import { useCopy } from 'design/locales/use-copy';

import { useDocsContext } from 'design/docs/context';

import { useDocsCrumbs } from 'design/docs/sections';
import { Sidebar } from 'design/docs/tokens/sidebar';
import { PATH } from 'design/docs/tokens/constants';

import { useTokenContext } from './use-token-context';

const MENU_ID = 'kicl-docs-tokens-menu';

const Header: React.FunctionComponent = () => {
  const { parsePath } = useDocsContext();
  const { isMobile } = useResponsive();
  const { pathname } = useLocation();
  const t = useCopy();
  const { category, name } = useTokenContext();

  const Trigger = (
    <Button
      aria-label={t('docs_tokens_open')}
      className='kicl-border-radius-sm'
      size='small'
      variant='secondary'
      popoverTarget={isMobile ? MENU_ID : undefined}
    >
      <Ri.RiMenuLine aria-hidden />
    </Button>
  );

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='max-content--1fr'
      justifyContent='start'
    >
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
              header={<CardTitle is='h2'>{t('docs_tokens')}</CardTitle>}
              id={MENU_ID}
              side='inline-start'
            >
              <Sidebar />
              <SheetFooter justifyContent='start'>
                <HomeLink showLabel to={parsePath()} />
              </SheetFooter>
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
        <Breadcrumb
          crumbs={useDocsCrumbs(PATH, category && t(`category_${category}`))}
          current={name}
        />
      </header>
    </Layout>
  );
};

export { Header };
