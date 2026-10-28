import React from 'react';

import { Button, Card, Layout, SearchInput } from 'design/components';

import type { FramesProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<FramesProps> = (props) => (
  <Card is='search'>
    <Layout autoFlow='column' frames='1fr--max-content' gap='narrow' {...props}>
      <form>
        <SearchInput aria-label='Search' />
        <Button type='submit'>Search</Button>
      </form>
    </Layout>
  </Card>
);

export { Preview };
