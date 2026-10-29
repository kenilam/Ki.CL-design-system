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
    For a page title, inside a <Text is='code'>Heading</Text> so the page still
    has a heading there.
  </>
);

const name = 'A heading';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    code={source}
    controls={{ dense: null, level: null, lookLike: null, variant: null }}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
