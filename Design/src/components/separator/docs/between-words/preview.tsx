import React from 'react';

import { Card, Layout, Separator, Text } from 'design/components';

const Preview: React.FC = () => (
  <Layout autoFlow='column' justifyContent='start'>
    <Card>
      <Text>19 October 2026</Text>
      <Separator orientation='vertical' />
      <Text>5 min read</Text>
      <Separator orientation='vertical' />
      <Text>Design system</Text>
    </Card>
  </Layout>
);

export { Preview };
