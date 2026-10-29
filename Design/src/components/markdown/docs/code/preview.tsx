import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Text>
      <Markdown>{'Run `make run` to start it.'}</Markdown>
    </Text>
  );
};

export { Preview };
