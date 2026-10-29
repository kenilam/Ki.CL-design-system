import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Text>
      <Markdown>{'Saved **two** drafts and *one* note.'}</Markdown>
    </Text>
  );
};

export { Preview };
