import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';
import { GROUP_CONTROLS } from 'design/components/checkbox/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>Several options under one question, where people can tick more than one.</>
);

const name = 'A group';

const Preset = (
  <Origin
    code={source}
    controls={GROUP_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
