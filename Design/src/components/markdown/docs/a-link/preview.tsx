import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => (
  <Text>
    <Markdown>{'Read the [README](https://github.com) first.'}</Markdown>
  </Text>
);

export { Preview };
