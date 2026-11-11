import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout, Text } from 'design/components';

// Context
import { useStatus } from 'design/components/status/context';

// Partials
import { StatusIcon } from 'design/components/status/root/icon';

const StatusMessage: React.FunctionComponent = () => {
  const { hasTitle, justifyContent, message } = useStatus();

  if (!message) {
    return null;
  }

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      gap='narrow'
      justifyContent={justifyContent}
    >
      <Text
        className={classNames('kicl-font-size-small', 'kicl-color-grey-700')}
        is='p'
      >
        {hasTitle ? null : <StatusIcon />}
        {message}
      </Text>
    </Layout>
  );
};

export { StatusMessage };
