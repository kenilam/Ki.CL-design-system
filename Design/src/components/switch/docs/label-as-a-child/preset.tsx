import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='switch_preset_label_as_a_child' />;

const name = 'Label as a child';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='switch_preset_label_as_a_child_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
