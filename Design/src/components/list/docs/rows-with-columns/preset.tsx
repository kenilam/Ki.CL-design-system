import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a checklist with an icon on each line. <Text is='code'>frames</Text> on
    each <Text is='code'>ListItem</Text> gives the icon its own width and the
    text the rest.
  </>
);

const name = 'Rows with columns';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
