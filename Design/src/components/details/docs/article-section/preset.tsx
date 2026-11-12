import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='details_preset_article_section' />;

const name = 'Article section';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='details_preset_article_section_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
