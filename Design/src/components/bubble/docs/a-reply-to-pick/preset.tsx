import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='bubble_preset_a_reply_to_pick' />;

const name = 'A reply to pick';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='bubble_preset_a_reply_to_pick_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
