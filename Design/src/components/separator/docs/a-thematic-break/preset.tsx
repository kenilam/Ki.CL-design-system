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
    For a change of topic between paragraphs. As an <Text is='code'>hr</Text>,
    screen readers announce it.
  </>
);

const name = 'A thematic break';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
