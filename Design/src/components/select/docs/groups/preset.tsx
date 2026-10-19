import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Splits a long list under headings, like cities by region. Each{' '}
    <Text is='code'>SelectGroup</Text> starts with a{' '}
    <Text is='code'>SelectLabel</Text>, and{' '}
    <Text is='code'>SelectSeparator</Text> draws a line between them.
  </>
);

const name = 'Groups';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
