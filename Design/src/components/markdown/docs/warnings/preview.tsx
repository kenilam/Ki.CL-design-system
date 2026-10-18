import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => (
  <Text>
    <Markdown>
      {'`DEPRECATED`{warning} Use the new prop. `REMOVED`{error} in 2.0.'}
    </Markdown>
  </Text>
);

export { Preview };
