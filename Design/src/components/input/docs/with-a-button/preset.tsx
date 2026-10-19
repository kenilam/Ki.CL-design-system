import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a field with one action, like sending a message. Pass an{' '}
    <Text is='code'>InputGroupButton</Text> to <Text is='code'>after</Text> and
    the button sits inside the border.
  </>
);

const name = 'With a button';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
