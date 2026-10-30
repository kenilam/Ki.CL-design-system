import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='dialog_preset_keyboard_only' />;

const name = 'Keyboard only';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='dialog_preset_keyboard_only_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
