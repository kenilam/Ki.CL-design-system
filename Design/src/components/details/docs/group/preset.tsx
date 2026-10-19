import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For an FAQ where only one answer is open at a time. Give each{' '}
    <Text is='code'>Details</Text> the same <Text is='code'>name</Text> and
    opening one closes the others.
  </>
);

const name = 'Group';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
