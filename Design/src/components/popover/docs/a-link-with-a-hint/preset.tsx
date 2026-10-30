import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='popover_preset_a_link_with_a_hint' />;

const name = 'A link with a hint';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='popover_preset_a_link_with_a_hint_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
