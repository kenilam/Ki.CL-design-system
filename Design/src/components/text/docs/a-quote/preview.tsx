import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <Text is='blockquote' {...props}>
      Make it work, make it right, make it fast.
    </Text>
  );
};

export { Preview };
