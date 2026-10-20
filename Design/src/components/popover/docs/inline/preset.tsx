import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';
import { HINT_CONTROLS } from 'design/components/popover/docs/controls';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a note on a word or phrase in a sentence. With{' '}
    <Text is='code'>inline</Text> the trigger sits in the line and wraps with
    the words around it.
  </>
);

const name = 'Inline';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={HINT_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
