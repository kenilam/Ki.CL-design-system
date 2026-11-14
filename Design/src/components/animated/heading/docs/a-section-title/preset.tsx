import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='animated_heading_preset_a_section_title' />;

const name = 'A section title';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='animated_heading_preset_a_section_title_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
