import React from 'react';

import { Markdown, Text } from 'design/components';

const Preview: React.FC = () => (
  <Text>
    <Markdown>
      {
        'The job went from `IDLE`{secondary} to `RUNNING`{info}, then `DONE`{confirm}.'
      }
    </Markdown>
  </Text>
);

export { Preview };
