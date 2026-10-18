import React from 'react';

import { Badge, Layout } from 'design/components';

import type { Props } from 'design/components/layout/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout display='flex' gap='narrow' wrap {...props}>
    <div>
      <Badge>Wraps</Badge>
      <Badge>onto</Badge>
      <Badge>the</Badge>
      <Badge>next</Badge>
      <Badge>line</Badge>
      <Badge>when</Badge>
      <Badge>it</Badge>
      <Badge>runs</Badge>
      <Badge>out</Badge>
      <Badge>of</Badge>
      <Badge>room</Badge>
    </div>
  </Layout>
);

export { Preview };
