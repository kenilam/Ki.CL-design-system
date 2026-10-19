import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a question with buttons to answer it, like confirming a delete.{' '}
    <Text is='code'>justifyContent</Text> on <Text is='code'>CardFooter</Text>{' '}
    pushes the buttons to the end. Without it they stretch across the footer.
  </>
);

const name = 'Footer';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
