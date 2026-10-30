import React from 'react';

import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='list_preset_basic' />;

const name = 'Basic';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='list_preset_basic_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
