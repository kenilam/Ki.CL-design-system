import React from 'react';

// Components
import { BUTTON_ICON_ONLY_UP_TO } from 'design/components/button/spec';

// Partials
import { Copy } from 'design/mdx/copy';
import { Preset as Origin } from 'design/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = <Copy id='button_preset_icon_only_on_narrow_screens' />;

const name = 'Icon only on narrow screens';

const Preset = (
  <Origin
    code={source}
    controls={{
      block: 'boolean',
      iconOnlyUpTo: { default: 'narrow', options: BUTTON_ICON_ONLY_UP_TO },
      lookLikeHyperLink: null,
      unstyled: null,
    }}
    description={description}
    label='button_preset_icon_only_on_narrow_screens_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
