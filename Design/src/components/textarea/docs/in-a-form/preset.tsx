import React from 'react';

// Components
import { Text } from 'design/components';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a message in a form, with a length rule on the{' '}
    <Text is='code'>FormField</Text>. Sending it empty or too long shows the
    error under it.
  </>
);

const name = 'In a form';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    controls={{ readOnly: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
