import React from 'react';

import { Card, Layout, Separator, Text } from 'design/components';

import type { Props } from 'design/components/separator/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout autoFlow={props.orientation === 'vertical' ? 'column' : 'row'}>
    <Card>
      <Text>Left</Text>
      <Separator orientation='vertical' {...props} />
      <Text>Right</Text>
    </Card>
  </Layout>
);

export { Preview };
