import React from 'react';

import { CodeBlock } from 'design/components';

const Preview: React.FC = () => {
  return (
    <CodeBlock language='markup'>
      {`<details>
  <summary>Shipping</summary>
  <p>Orders leave the warehouse within two days.</p>
</details>`}
    </CodeBlock>
  );
};

export { Preview };
