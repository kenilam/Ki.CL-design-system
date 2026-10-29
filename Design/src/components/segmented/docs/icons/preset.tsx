import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For choices an icon says well, like light and dark. Give each option an{' '}
    <Text is='code'>aria-label</Text> so screen readers can tell them apart.
  </>
);

const name = 'Icons';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
