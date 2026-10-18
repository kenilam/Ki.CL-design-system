import React from 'react';

import { Badge, Layout } from 'design/components';

import type { Props } from 'design/components/layout/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout autoFlow='column' frames='1fr--1fr--1fr' gap='normal' {...props}>
    <div className='kicl-inline-size-full'>
      <Badge>A third</Badge>
      <Badge>A third</Badge>
      <Badge>A third</Badge>
    </div>
  </Layout>
);

export { Preview };
