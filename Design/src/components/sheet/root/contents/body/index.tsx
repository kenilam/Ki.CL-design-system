import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

const Body: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Layout alignContent='start' gap='normal'>
      <section
        className={classNames(
          'kicl-padding-block-end-narrow',
          'kicl-padding-inline'
        )}
      >
        {children}
      </section>
    </Layout>
  );
};

export { Body };
