import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='hyper_link_preset_back' />;

const name = 'Back';

const Preset = (
  <Origin
    code={source}
    controls={{
      disabled: null,
      level: null,
      lookLikeButton: null,
      size: null,
      unstyled: null,
      variant: null,
    }}
    description={description}
    label='hyper_link_preset_back_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
