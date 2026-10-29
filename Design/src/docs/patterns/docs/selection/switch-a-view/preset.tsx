import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Switch between a list and a grid. A <Text is='code'>Segmented</Text> control
    changes how the same items are shown, straight away.
  </>
);

const name = 'Switch a view';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
