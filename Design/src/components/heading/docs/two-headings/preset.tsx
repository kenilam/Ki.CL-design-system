import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    A section title with a smaller one under it, an <Text is='code'>h2</Text>{' '}
    then an <Text is='code'>h3</Text>.
  </>
);

const name = 'Two headings';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
