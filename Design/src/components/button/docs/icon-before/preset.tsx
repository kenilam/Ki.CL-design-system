import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_icon_before' />;

const name = 'Icon before';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='button_preset_icon_before_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
