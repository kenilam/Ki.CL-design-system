import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For when the setting's name is already on screen nearby.{' '}
    <Text is='code'>aria-label</Text> gives the switch a name for screen
    readers.
  </>
);

const name = 'No visible label';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
