import React from 'react';

import { Breadcrumb, Card } from 'design/components';

const Preview: React.FC = () => (
  <Card is='section' size={3}>
    <Breadcrumb
      crumbs={[
        { name: 'Shop', to: '#shop' },
        {
          name: 'Kitchen',
          siblings: [
            { name: 'Bathroom', to: '#bathroom' },
            { name: 'Garden', to: '#garden' },
            { name: 'Kitchen', to: '#kitchen' },
          ],
          to: '#kitchen',
        },
        { name: 'Knives' },
      ]}
      current='Japanese paring knife'
    />
  </Card>
);

export { Preview };
