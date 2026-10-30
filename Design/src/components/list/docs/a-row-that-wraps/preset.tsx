import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';
import { FLEX_CONTROLS } from 'design/components/list/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='list_preset_a_row_that_wraps' />;

const name = 'A row that wraps';

const Preset = (
  <Origin
    code={source}
    controls={FLEX_CONTROLS}
    description={description}
    label='list_preset_a_row_that_wraps_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
