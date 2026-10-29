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
    For a box that stands for several others when only some of them are checked.
    A group&apos;s <Text is='code'>selectAll</Text> box does this for you.
  </>
);

const name = 'Partly checked';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    controls={{ checked: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
