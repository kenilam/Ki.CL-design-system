import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Open Filters and turn some on. The button at the foot of the{' '}
    <Text is='code'>Sheet</Text> says how many results you'll get, and the list
    behind changes only when you press it. Closing the sheet another way drops
    the changes.
  </>
);

const name = 'Filters';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
