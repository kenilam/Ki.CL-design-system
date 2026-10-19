import React from 'react';

import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Cards of different heights side by side. Each stretches to the tallest until{' '}
    <Text is='code'>alignItems</Text> lines them up at the start, centre or end
    instead.
  </>
);

const name = 'Alignment';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
