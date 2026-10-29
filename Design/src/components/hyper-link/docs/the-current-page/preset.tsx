import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    A link to the page you&apos;re on is marked as the current page: its
    underline is heavier, and it can&apos;t be clicked.
  </>
);

const name = 'The current page';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
