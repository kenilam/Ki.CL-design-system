import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a link with a note on what&apos;s behind it. Hovering or focusing it
    shows the hint, and clicking still follows the link.
  </>
);

const name = 'A link with a hint';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
