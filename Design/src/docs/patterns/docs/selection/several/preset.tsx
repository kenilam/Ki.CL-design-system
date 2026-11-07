import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_selection_preset_several' />;

const name = 'Several';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_selection_preset_several_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
