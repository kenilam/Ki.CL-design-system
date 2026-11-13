import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_icon_only' />;

const name = 'Icon only';

const Preset = (
  <Origin
    code={source}
    controls={{
      block: { options: 'boolean', when: { lookLikeHyperLink: false } },
    }}
    description={description}
    label='button_preset_icon_only_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
