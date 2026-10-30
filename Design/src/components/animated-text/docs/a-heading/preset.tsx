import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='animated_text_preset_a_heading' />;

const name = 'A heading';

const Preset = (
  <Origin
    code={source}
    controls={{ dense: null, level: null, lookLike: null, variant: null }}
    description={description}
    label='animated_text_preset_a_heading_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
