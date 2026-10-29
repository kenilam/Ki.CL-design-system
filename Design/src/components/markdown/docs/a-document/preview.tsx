import React from 'react';

import { Card, Markdown } from 'design/components';

const Preview: React.FC = () => {
  return (
    <Card is='article'>
      <Markdown>
        {`### Release notes

Drafts now save **as you type**, and a saved draft opens where you left it.

- Drafts save every few seconds
- A draft opens at the last line you edited
- Old drafts are kept for *30 days*

> Turn saving off in Settings if you share the device.

---

1. Open a draft
2. Pick **History**
3. Choose a version to restore`}
      </Markdown>
    </Card>
  );
};

export { Preview };
