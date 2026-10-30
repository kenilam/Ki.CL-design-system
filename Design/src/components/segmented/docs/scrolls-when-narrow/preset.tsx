import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='segmented_preset_scrolls_when_narrow' />;

const name = 'Scrolls when narrow';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='segmented_preset_scrolls_when_narrow_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
