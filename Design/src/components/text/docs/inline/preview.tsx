import React from 'react';

import { Text } from 'design/components';

import type { Props } from 'design/components/text/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Text {...props}>
    Run <Text is='code'>make run</Text>, then open{' '}
    <Text is='em'>localhost</Text>. <Text is='strong'>Restart</Text> after a
    config change.
  </Text>
);

export { Preview };
