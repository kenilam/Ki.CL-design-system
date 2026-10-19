import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a date next to a post or a change. <Text is='code'>is='time'</Text> with{' '}
    <Text is='code'>dateTime</Text> makes it a proper{' '}
    <Text is='code'>time</Text> element.
  </>
);

const name = 'A date';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
