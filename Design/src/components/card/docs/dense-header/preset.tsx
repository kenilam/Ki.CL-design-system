import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a card that's only a title.{' '}
    <Text is='code'>kicl-padding-block-end-none</Text> on{' '}
    <Text is='code'>CardHeader</Text> removes the space it keeps for content
    below.
  </>
);

const name = 'Dense header';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
