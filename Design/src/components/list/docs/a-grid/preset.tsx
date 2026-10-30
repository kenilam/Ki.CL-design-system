import React from 'react';

import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { GRID_CONTROLS } from 'design/components/list/docs/controls';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='list_preset_a_grid' />;

const name = 'A grid';

const Preset = (
  <Origin
    code={source}
    controls={GRID_CONTROLS}
    description={description}
    label='list_preset_a_grid_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
