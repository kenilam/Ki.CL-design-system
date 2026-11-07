import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='markdown_preset_strikethrough' />;

const name = 'Strikethrough';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='markdown_preset_strikethrough_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
