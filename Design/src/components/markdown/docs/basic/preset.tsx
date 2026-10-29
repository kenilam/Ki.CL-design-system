import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Makes a word bold with <Text is='code'>**two**</Text> or italic with{' '}
    <Text is='code'>*one*</Text>.
  </>
);

const name = 'Basic';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
