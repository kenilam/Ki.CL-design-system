import React from 'react';

import { Badge, Layout } from 'design/components';

import type { Props } from 'design/components/layout/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout autoFlow='column' frames='1fr--max-content' gap='normal' {...props}>
    <div className='kicl-inline-size-full'>
      <Badge>Takes the rest</Badge>
      <Badge>As wide as its content</Badge>
    </div>
  </Layout>
);

export { Preview };
