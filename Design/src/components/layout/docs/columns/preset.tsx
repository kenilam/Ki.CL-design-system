import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { COLUMNS_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='layout_preset_columns' />;

const name = 'Columns';

const Preset = (
  <Origin
    code={source}
    controls={COLUMNS_CONTROLS}
    description={description}
    label='layout_preset_columns_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
