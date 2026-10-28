import React from 'react';

import { Card, CardTitle, Layout } from 'design/components';

import type { ColumnsProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<ColumnsProps> = (props) => (
  <Layout columns gap='normal'>
    <Card is='section'>
      <Layout span={8} {...props}>
        <Card
          header={<CardTitle is='h3'>Article</CardTitle>}
          is='article'
          variant='secondary'
        />
      </Layout>
      <Layout span={4}>
        <Card
          header={<CardTitle is='h3'>Aside</CardTitle>}
          is='aside'
          variant='secondary'
        />
      </Layout>
    </Card>
  </Layout>
);

export { Preview };
