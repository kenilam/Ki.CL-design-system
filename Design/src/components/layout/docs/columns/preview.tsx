import React from 'react';

import { Badge, Layout } from 'design/components';

import type { Props } from 'design/components/layout/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout columns gap='normal' {...props}>
    <div className='kicl-inline-size-full'>
      <Layout span={8}>
        <Badge>8 columns</Badge>
      </Layout>
      <Layout span={4}>
        <Badge>4 columns</Badge>
      </Layout>
    </div>
  </Layout>
);

export { Preview };
