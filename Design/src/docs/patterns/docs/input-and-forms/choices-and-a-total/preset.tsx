import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Change the delivery or the extras and watch the total. Each group is a{' '}
    <Text is='code'>fieldset</Text> with a <Text is='code'>legend</Text>, and
    the total comes after the choices, where focus reaches it next.
  </>
);

const name = 'Choices and a total';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
