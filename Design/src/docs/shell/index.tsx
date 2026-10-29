import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { Outlet } from 'design/router';

// Components
import { Layout } from 'design/components';

// Partials
import { Search } from 'design/docs/search';

/** The docs search, then the page that is open, on the 12-column width. */
const Shell: React.FunctionComponent = () => (
  <Layout alignContent='start'>
    <article
      className={classNames(
        'kicl-background-color-body',
        'kicl-min-block-size-screen',
        'kicl-inline-size-full',
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-frame',
        'kicl-padding-block-start-header',
        'kicl-padding-inline-frame'
      )}
    >
      <Search className='kicl-max-inline-size-columns-4' />
      <Outlet />
    </article>
  </Layout>
);

export { Shell };
