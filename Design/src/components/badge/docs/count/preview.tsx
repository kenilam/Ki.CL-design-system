import React from 'react';

import { Badge, Layout, Text } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout alignItems='center' autoFlow='column' gap='narrow'>
    <Text>
      Inbox
      <Badge className='kicl-border-radius-lg' size='small' {...props}>
        3
      </Badge>
    </Text>
  </Layout>
);

export { Preview };
