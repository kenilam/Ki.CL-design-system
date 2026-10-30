import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_icon_after' />;

const name = 'Icon after';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='button_preset_icon_after_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
