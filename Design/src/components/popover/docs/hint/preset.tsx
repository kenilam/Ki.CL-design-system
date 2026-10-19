import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    A short note that shows while the trigger is hovered or focused, like a
    tooltip. Use <Text is='code'>PopoverHint</Text> in place of{' '}
    <Text is='code'>PopoverContent</Text>.
  </>
);

const name = 'Hint';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
