import React from 'react';

import { Input, Layout, Text } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Layout gap='narrowest'>
    <label>
      <Text className='kicl-font-size-small kicl-font-weight-bold' is='span'>
        Name
      </Text>
      <Input placeholder='Your name' {...props} />
    </label>
  </Layout>
);

export { Preview };
