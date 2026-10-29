import React from 'react';

import { Markdown } from 'design/components';

const Preview: React.FC = () => (
  <Markdown>{`![The Ki.CL banner](/assets/static/banner.light.webp)`}</Markdown>
);

export { Preview };
