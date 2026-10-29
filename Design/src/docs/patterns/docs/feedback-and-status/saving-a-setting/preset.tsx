import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Turn the switch on and off. While it saves, the line beside it says so; when
    it's done, it says that too. The line is a{' '}
    <Text is='code'>role=&quot;status&quot;</Text> region, so a screen reader
    hears each change without moving.
  </>
);

const name = 'Saving a setting';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
