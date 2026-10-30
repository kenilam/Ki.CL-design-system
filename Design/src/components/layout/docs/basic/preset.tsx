import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { STACK_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='layout_preset_basic' />;

const name = 'Basic';

const Preset = (
  <Origin
    code={source}
    controls={STACK_CONTROLS}
    description={description}
    label='layout_preset_basic_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
