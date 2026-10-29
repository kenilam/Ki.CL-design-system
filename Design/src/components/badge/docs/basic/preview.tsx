import React from 'react';

import { Badge, Layout, Text } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Layout alignItems='center' autoFlow='column' gap='narrow'>
      <Text>
        Dark theme
        <Badge {...props}>New</Badge>
      </Text>
    </Layout>
  );
};

export { Preview };
