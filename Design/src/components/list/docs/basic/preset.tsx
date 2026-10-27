import React from 'react';

import { Preset as Origin } from 'design/docs/mdx/preview';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <>One item under another.</>;

const name = 'Basic';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
