import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { Outlet } from 'design/router';

// Components
import { Layout } from 'design/components';

/** The page that is open, on the 12-column width. */
const Shell: React.FunctionComponent = () => (
  <Layout alignContent='start'>
    <article
      className={classNames(
        'kicl-background-color-body',
        'kicl-min-block-size-screen',
        'kicl-inline-size-full',
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-frame',
        'kicl-padding-block-start-header-offset',
        'kicl-padding-inline-frame'
      )}
    >
      <Outlet />
    </article>
  </Layout>
);

export { Shell };
