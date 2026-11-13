import React from 'react';

// Components
import { BUTTON_SIZES } from 'design/components';
import { LEVELS, VARIANTS } from 'design/components/spec';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='hyper_link_preset_home' />;

const name = 'Home';

const Preset = (
  <Origin
    code={source}
    controls={{
      block: { options: 'boolean', when: { showLabel: false } },
      disabled: null,
      level: { default: 'neutral', options: LEVELS },
      lookLikeButton: null,
      showLabel: 'boolean',
      size: { default: 'small', options: BUTTON_SIZES },
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
