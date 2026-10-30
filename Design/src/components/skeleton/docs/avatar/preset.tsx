import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='skeleton_preset_avatar' />;

const name = 'Avatar';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='skeleton_preset_avatar_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
