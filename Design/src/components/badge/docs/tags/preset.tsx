import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='badge_preset_tags' />;

const name = 'Tags';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='badge_preset_tags_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
