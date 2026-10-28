import React from 'react';

import { Button, Layout, SearchInput } from 'design/components';

import type { FramesProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<FramesProps> = (props) => (
  <Layout autoFlow='column' frames='1fr--max-content' gap='narrow' {...props}>
    <form className='kicl-inline-size-full' role='search'>
      <SearchInput aria-label='Search' />
      <Button type='submit'>Search</Button>
    </form>
  </Layout>
);

export { Preview };
