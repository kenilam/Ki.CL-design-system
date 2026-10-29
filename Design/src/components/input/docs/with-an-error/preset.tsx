import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a field that failed a check. Its name, border and message turn red, and
    a screen reader reads the message with the field.
  </>
);

const name = 'With an error';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    controls={{ readOnly: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
