import React from 'react';

import { Breadcrumb } from 'design/components';

const Preview: React.FC = () => (
  <Breadcrumb
    crumbs={[
      { name: 'Shop', to: '#shop' },
      { name: 'Kitchen', to: '#kitchen' },
      { name: 'Knives' },
    ]}
    current='Paring knife'
  />
);

export { Preview };
