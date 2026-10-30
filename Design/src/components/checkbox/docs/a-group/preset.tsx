import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';
import { GROUP_CONTROLS } from 'design/components/checkbox/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='checkbox_preset_a_group' />;

const name = 'A group';

const Preset = (
  <Origin
    code={source}
    controls={GROUP_CONTROLS}
    description={description}
    label='checkbox_preset_a_group_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
