import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='breadcrumb_preset_narrow' />;

const name = 'In a narrow space';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='breadcrumb_preset_narrow_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
