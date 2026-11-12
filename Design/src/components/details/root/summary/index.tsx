import React from 'react';

// Components
import { Layout } from 'design/components';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/details/constants';

// Context
import { useClicked } from 'design/components/details/context';

const Summary: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const { click } = useClicked();

  return (
    <Layout
      alignItems='start'
      autoFlow='column'
      frames='1fr--max-content'
      gap='narrow'
    >
      <summary
        className={`${CLASS_NAME}__summary`}
        onClick={click}
      >
        {children}
      </summary>
    </Layout>
  );
};

export { Summary };
