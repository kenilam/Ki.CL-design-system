import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a dialog that only shows something, like a picture. Without a header,
    name it with <Text is='code'>aria-label</Text>.
  </>
);

const name = 'No title';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
