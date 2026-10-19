import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Several options under one question, where people can tick more than one.{' '}
    <Text is='code'>legend</Text> is the question and{' '}
    <Text is='code'>defaultValue</Text> lists the boxes that start ticked.
  </>
);

const name = 'A group';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
