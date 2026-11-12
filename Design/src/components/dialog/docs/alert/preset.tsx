import React from 'react';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='dialog_preset_alert' />;

const name = 'Alert';

const Preset = (
  <Origin
    code={source}
    description={description}
    label='dialog_preset_alert_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
