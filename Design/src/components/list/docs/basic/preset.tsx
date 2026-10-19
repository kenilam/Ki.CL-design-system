import React from 'react';

import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    One item under another. <Text is='code'>gap</Text> sets the space between
    them.
  </>
);

const name = 'Basic';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
