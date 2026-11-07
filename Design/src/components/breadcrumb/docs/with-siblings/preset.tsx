import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='breadcrumb_preset_with_siblings' />;

const name = 'With siblings';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='breadcrumb_preset_with_siblings_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
