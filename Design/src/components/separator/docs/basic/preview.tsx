import React from 'react';

import { Card, Layout, Separator, Text } from 'design/components';

import type { Props } from 'design/components/separator/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout
    autoFlow={props.orientation === 'vertical' ? 'column' : 'row'}
    justifyContent='center'
  >
    <Card>
      <Text>Above</Text>
      <Separator {...props} />
      <Text>Below</Text>
    </Card>
  </Layout>
);

export { Preview };
