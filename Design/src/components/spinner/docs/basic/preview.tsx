import React from 'react';

import { Layout, Spinner, Text } from 'design/components';

import type { Props } from 'design/components/spinner/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Layout autoFlow='column' gap='narrow'>
      <Text className='kicl-font-size-moderate'>
        <Spinner {...props} position='inline' />
        Loading
      </Text>
    </Layout>
  );
};

export { Preview };
