import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='pattern_input_and_forms_preset_sign_up' />;

const name = 'Sign up';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_input_and_forms_preset_sign_up_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
