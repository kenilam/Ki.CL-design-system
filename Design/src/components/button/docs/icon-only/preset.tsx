import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For an action everyone knows by its icon, like closing a panel. Give it an{' '}
    <Text is='code'>aria-label</Text> so screen readers can say what it does.
  </>
);

const name = 'Icon only';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
