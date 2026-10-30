import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='navigation_preset_as_buttons' />;

const name = 'As buttons';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='navigation_preset_as_buttons_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
