import React from 'react';

// Components
import { Text } from 'design/components';
import { BUTTON_SIZES } from 'design/components/button/spec';
import { LEVELS, VARIANTS } from 'design/components/spec';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For the link back to the home page: <Text is='code'>HomeLink</Text>, a house
    with the look of a button, its name read by screen readers or shown beside
    it.
  </>
);

const name = 'Home';

/** The preset as `Preview` reads it, with the example's own file as its code. */
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
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
