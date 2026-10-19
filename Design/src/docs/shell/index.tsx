import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { Outlet } from 'react-router-dom';

// Components
import { Layout } from 'design/components';

// Constants
import { CLASS_NAME } from 'design/docs/constants';

/** The page that is open, on the 12-column width. */
const Shell: React.FunctionComponent = () => (
  <Layout>
    <div
      className={classNames(
        CLASS_NAME,
        'kicl-inline-size-full',
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-frame',
        'kicl-padding-block-start-header-offset',
        'kicl-padding-inline-frame'
      )}
    >
      <Outlet />
    </div>
  </Layout>
);

export { Shell };
