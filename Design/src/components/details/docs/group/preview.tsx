import React from 'react';

import { Card, Details, Text } from 'design/components';

import type { Props } from 'design/components/details/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <Card size='max'>
    <Details name='faq' summary='Is there a free plan?' {...props}>
      <Text>Yes, for up to three projects.</Text>
    </Details>
    <Details name='faq' summary='Can I change plan later?'>
      <Text>Yes, at any time. The difference is charged pro rata.</Text>
    </Details>
  </Card>
);

export { Preview };
