import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_copies_a_value' />;

const name = 'Copies a value';

const Preset = (
  <Origin
    code={source}
    controls={{ lookLikeHyperLink: null, unstyled: null }}
    description={description}
    label='button_preset_copies_a_value_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
