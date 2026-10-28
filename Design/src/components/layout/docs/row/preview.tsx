import React from 'react';

import { Button, Card, CardTitle, Layout } from 'design/components';

import type { RowProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<RowProps> = (props) => (
  <Card header={<CardTitle is='h3'>Unsaved changes</CardTitle>} is='section'>
    <Layout autoFlow='column' gap='narrow' justifyContent='end' {...props}>
      <footer>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save</Button>
      </footer>
    </Layout>
  </Card>
);

export { Preview };
