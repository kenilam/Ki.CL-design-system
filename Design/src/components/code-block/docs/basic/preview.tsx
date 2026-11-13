import React from 'react';

import { CodeBlock } from 'design/components';

const Preview: React.FC = () => {
  return (
    <CodeBlock>
      {`import { Button } from 'design/components';

const Save = () => {
  return <Button>Save</Button>;
};`}
    </CodeBlock>
  );
};

export { Preview };
