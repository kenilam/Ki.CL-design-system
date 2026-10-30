import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='bubble_preset_a_conversation' />;

const name = 'A conversation';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='bubble_preset_a_conversation_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
