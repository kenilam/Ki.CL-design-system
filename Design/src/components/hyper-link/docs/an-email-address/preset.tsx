import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='hyper_link_preset_an_email_address' />;

const name = 'An email address';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='hyper_link_preset_an_email_address_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
