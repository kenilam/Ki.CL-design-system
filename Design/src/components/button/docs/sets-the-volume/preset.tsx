import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_sets_the_volume' />;

const name = 'Sets the volume';

const Preset = (
  <Origin
    code={source}
    controls={{
      block: null,
      disabled: null,
      level: null,
      lookLikeHyperLink: null,
      unstyled: null,
    }}
    description={description}
    label='button_preset_sets_the_volume_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
