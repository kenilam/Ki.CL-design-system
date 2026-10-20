import React from 'react';

import { Badge, Layout, Text } from 'design/components';

import type { Props } from 'design/components/badge/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout alignItems='center' autoFlow='column' gap='narrow'>
    <Text>
      Release notes
      <Badge dateTime='2026-10-14' is='time' variant='ghost' {...props}>
        14 Oct
      </Badge>
    </Text>
  </Layout>
);

export { Preview };
