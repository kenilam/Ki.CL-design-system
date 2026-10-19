import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Checks each field as soon as you leave it. That comes from{' '}
    <Text is='code'>mode: 'onTouched'</Text> in <Text is='code'>useForm</Text>.
  </>
);

const name = 'Contact';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
