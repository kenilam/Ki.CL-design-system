import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Omit<Props, 'is' | 'lookLike'>> = (props) => {
  return (
    <Text is='pre' {...props}>
      <Text is='code'>
        {`yarn add @ki-cl/design
yarn dev`}
      </Text>
    </Text>
  );
};

export { Preview };
