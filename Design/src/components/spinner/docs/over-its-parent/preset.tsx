import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Controls
import { OVERLAY_CONTROLS } from 'design/components/spinner/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='spinner_preset_over_its_parent' />;

const name = 'Over its parent';

const Preset = (
  <Origin
    code={source}
    controls={OVERLAY_CONTROLS}
    description={description}
    label='spinner_preset_over_its_parent_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
