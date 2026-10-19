import React from 'react';

import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Layout,
} from 'design/components';

import type { RowProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<RowProps> = (props) => (
  <Card header={<CardTitle is='h3'>Unsaved changes</CardTitle>}>
    <Layout autoFlow='column' gap='narrow' justifyContent='end' {...props}>
      <CardContent>
        <Button variant='secondary'>Cancel</Button>
        <Button>Save</Button>
      </CardContent>
    </Layout>
  </Card>
);

export { Preview };
