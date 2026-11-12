import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_shares_a_link' />;

const name = 'Shares a link';

const Preset = (
  <Origin
    code={source}
    controls={{ lookLikeHyperLink: null, unstyled: null }}
    description={description}
    label='button_preset_shares_a_link_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
