import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/dialog/constants';

// Partials
import { Close } from './close';
import { Footer } from './footer';
import { Header } from './header';

const Panel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Layout alignContent='start'>
      <div
        className={classNames(
          `${CLASS_NAME}__panel`,
          'kicl-box-shadow-overlay',
          'kicl-margin-inline-auto',
          'kicl-position-relative',
          'kicl-z-index-raised'
        )}
      >
        <Header />

        {/* Outside the header so the dialog's name skips its label. */}
        <Close />

        {children}

        <Footer />
      </div>
    </Layout>
  );
};

export { Panel };
