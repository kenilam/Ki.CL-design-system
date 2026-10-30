import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Controls
import { TITLE_CONTROLS } from 'design/components/status/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='status_preset_with_a_title' />;

const name = 'With a title';

const Preset = (
  <Origin
    code={source}
    controls={TITLE_CONTROLS}
    description={description}
    label='status_preset_with_a_title_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
