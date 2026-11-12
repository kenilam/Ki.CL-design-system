import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='separator_preset_a_gradient_rule' />;

const name = 'A gradient rule';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='separator_preset_a_gradient_rule_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
