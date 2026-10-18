import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text {...props}>
    Status:{' '}
    <Text accent='confirm' is='code'>
      READY
    </Text>{' '}
    <Text accent='error' is='code'>
      FAILED
    </Text>{' '}
    <Text is='code' variant='secondary'>
      IDLE
    </Text>
  </Text>
);

export { Preview };
