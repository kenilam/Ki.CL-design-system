import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Text>
      <Markdown>{'Ships on ~~Monday~~ Tuesday.'}</Markdown>
    </Text>
  );
};

export { Preview };
