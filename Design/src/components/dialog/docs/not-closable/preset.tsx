import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a message the user has to acknowledge. With{' '}
    <Text is='code'>{'closable={false}'}</Text> neither Escape nor a click
    outside closes it, only the button in the footer.
  </>
);

const name = 'Not closable';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
