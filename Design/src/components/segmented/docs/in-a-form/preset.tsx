import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a choice in a form. Its legend names it, and the chosen value goes in
    the form&apos;s values like any field&apos;s.
  </>
);

const name = 'In a form';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
