import React from 'react';

import { Breadcrumb, Card } from 'design/components';

const Preview: React.FC = () => (
  <Card is='section' size={3}>
    <Breadcrumb
      crumbs={[
        { name: 'Shop', to: '#shop' },
        { name: 'Kitchen', to: '#kitchen' },
        { name: 'Knives' },
      ]}
      current='Japanese paring knife'
    />
  </Card>
);

export { Preview };
