import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    When the name needs its own styling. Wrap it in{' '}
    <Text is='code'>SwitchLabel</Text> and give that a{' '}
    <Text is='code'>className</Text>.
  </>
);

const name = 'Label as a child';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
