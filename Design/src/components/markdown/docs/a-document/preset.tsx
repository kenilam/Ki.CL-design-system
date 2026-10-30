import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='markdown_preset_a_document' />;

const name = 'A document';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='markdown_preset_a_document_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
