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
    While an action runs. <Text is='code'>aria-disabled</Text> keeps the button
    in the tab order and announced, where <Text is='code'>disabled</Text> would
    take it out.
  </>
);

const name = 'Busy';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
