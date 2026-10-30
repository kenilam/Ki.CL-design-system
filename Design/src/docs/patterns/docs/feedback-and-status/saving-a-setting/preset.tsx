import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <Copy id='pattern_feedback_and_status_preset_saving_a_setting' />
);

const name = 'Saving a setting';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='pattern_feedback_and_status_preset_saving_a_setting_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
