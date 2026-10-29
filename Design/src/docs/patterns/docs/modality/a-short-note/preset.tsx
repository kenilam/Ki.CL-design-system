import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    The info button opens a <Text is='code'>Popover</Text> beside the price. It
    doesn't block the page: click anywhere else or press Escape to close it.
  </>
);

const name = 'A short note';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
