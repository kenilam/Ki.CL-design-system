import React from 'react';

import {
  Button,
  Card,
  CardContent,
  Layout,
  SearchInput,
} from 'design/components';

import type { FramesProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<FramesProps> = (props) => (
  <Card is='form' role='search'>
    <Layout autoFlow='column' frames='1fr--max-content' gap='narrow' {...props}>
      <CardContent>
        <SearchInput aria-label='Search' />
        <Button type='submit'>Search</Button>
      </CardContent>
    </Layout>
  </Card>
);

export { Preview };
