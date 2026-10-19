import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For links that go in order, like the steps of a guide. Setting{' '}
    <Text is='code'>is</Text> to <Text is='code'>ol</Text> makes it an ordered
    list.
  </>
);

const name = 'Steps';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
