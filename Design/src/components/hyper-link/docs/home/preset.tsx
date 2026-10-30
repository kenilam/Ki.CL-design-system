import React from 'react';

// Components
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='hyper_link_preset_home' />;

const name = 'Home';

const Preset = (
  <Origin
    code={source}
    controls={{
      disabled: null,
      level: { default: 'neutral', options: LEVELS },
      lookLikeButton: null,
      showLabel: 'boolean',
      size: BUTTON_SIZES,
      unstyled: null,
      variant: { default: 'secondary', options: VARIANTS },
    }}
    description={description}
    label='hyper_link_preset_home_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
