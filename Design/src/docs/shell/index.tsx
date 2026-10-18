import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { Outlet } from 'react-router-dom';

// Components
import { Layout } from 'design/components';

// Partials
import { Sidebar } from 'design/docs/sidebar';

// Constants
import { CLASS_NAME } from 'design/docs/constants';

/** The sidebar beside the page that is open, on the 12-column grid. */
const Shell: React.FunctionComponent = () => (
  <Layout alignItems='start' columns gap='wider'>
    <div
      className={classNames(
        CLASS_NAME,
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-frame',
        'kicl-padding-inline-frame'
      )}
    >
      <Layout span={3}>
        <Sidebar />
      </Layout>
      {/* The page is a route of its own; its article takes the columns it spans. */}
      <Outlet />
    </div>
  </Layout>
);

export { Shell };
