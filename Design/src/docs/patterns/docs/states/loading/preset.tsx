import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    The orders load when the card appears, and Reload loads them again.
    Placeholders the shape of the list hold its place, so nothing jumps when it
    arrives, and <Text is='code'>aria-busy</Text> tells assistive technology to
    wait.
  </>
);

const name = 'Loading';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
