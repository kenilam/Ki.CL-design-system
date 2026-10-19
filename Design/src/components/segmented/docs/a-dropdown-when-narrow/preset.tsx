import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { POPOVER_CONTROLS } from 'design/components/segmented/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    When the row doesn't fit, it shows only the current choice and opens the
    rest in a popover. <Text is='code'>collapse='popover'</Text> turns this on.
  </>
);

const name = 'A dropdown when narrow';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={POPOVER_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
