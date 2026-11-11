import React from 'react';

// Components
import { Heading, Layout } from 'design/components';
import type { HeadingProps } from 'design/components';

// Context
import { useStatus } from 'design/components/status/context';

// Partials
import { StatusIcon } from 'design/components/status/root/icon';
import { Text } from './text';

const StatusTitle: React.FunctionComponent = () => {
  const { hasTitle, headingLevel, justifyContent } = useStatus();

  if (!hasTitle) {
    return null;
  }

  return (
    <Layout
      alignContent='center'
      alignItems='center'
      autoFlow='column'
      gap='narrow'
      justifyContent={justifyContent}
    >
      <Heading
        dense
        {...({ is: headingLevel, lookLike: 'h4' } as HeadingProps)}
      >
        <StatusIcon />
        <Text />
      </Heading>
    </Layout>
  );
};

export { StatusTitle };
