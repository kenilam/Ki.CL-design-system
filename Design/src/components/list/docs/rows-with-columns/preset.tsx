import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='list_preset_rows_with_columns' />;

const name = 'Rows with columns';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='list_preset_rows_with_columns_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
