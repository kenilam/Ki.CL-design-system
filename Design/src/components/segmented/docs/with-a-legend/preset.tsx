import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Puts a visible label above the options. A{' '}
    <Text is='code'>{'<legend>'}</Text> as the first child names the group, so
    it doesn't need an <Text is='code'>aria-label</Text>.
  </>
);

const name = 'With a legend';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
