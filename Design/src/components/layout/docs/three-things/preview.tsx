import React from 'react';

import { Badge, Layout } from 'design/components';

import type { Props } from 'design/components/layout/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout
    autoFlow='column'
    className='kicl-min-block-size-columns-2'
    {...props}
  >
    <div>
      <Badge>One</Badge>
      <Badge className='kicl-padding-block-wide'>Two</Badge>
      <Badge>Three</Badge>
    </div>
  </Layout>
);

export { Preview };
