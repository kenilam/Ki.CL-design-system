import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { FILL_CONTROLS } from 'design/components/layout/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a list of cards. <Text is='code'>fill</Text> sets how many of 12 columns
    each card covers, so <Text is='code'>{'fill={3}'}</Text> puts four on a row.
    On phones it's one per row.
  </>
);

const name = 'Fill';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={FILL_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
