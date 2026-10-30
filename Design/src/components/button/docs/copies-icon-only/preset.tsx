import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_copies_icon_only' />;

const name = 'Copies, icon only';

const Preset = (
  <Origin
    controls={{ lookLikeHyperLink: null, unstyled: null }}
    code={source}
    description={description}
    label='button_preset_copies_icon_only_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
