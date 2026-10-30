import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='badge_preset_count' />;

const name = 'Count';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='badge_preset_count_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
