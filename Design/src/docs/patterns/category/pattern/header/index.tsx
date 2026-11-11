import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Partials
import { Crumbs } from './crumbs';
import { Menu } from './menu';

const Header: React.FunctionComponent = () => {
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
          'kicl-padding-inline-narrow',
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
        <Menu />
        <Crumbs />
      </header>
    </Layout>
  );
};

export { Header };
