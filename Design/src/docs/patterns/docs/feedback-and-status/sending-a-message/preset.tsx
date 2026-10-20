import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Press Send. The first try fails on purpose: the button shows it's working,
    then an error <Text is='code'>Status</Text> says what happened and offers a
    way out. Try again succeeds.
  </>
);

const name = 'Sending a message';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
