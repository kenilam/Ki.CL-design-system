import React from 'react';

import { Markdown } from 'design/components';

const Preview: React.FC = () => (
  <Markdown>
    {`Install it with:

\`\`\`
yarn add @ki-cl/design
\`\`\``}
  </Markdown>
);

export { Preview };
