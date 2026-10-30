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
    When the first cell names its row, make it a <Text is='code'>th</Text> with{' '}
    <Text is='code'>scope=&apos;row&apos;</Text>. Screen readers then read it
    with every cell in the row. It keeps the body&apos;s weight, so the column
    headers still stand out.
  </>
);

const name = 'Row headers';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
