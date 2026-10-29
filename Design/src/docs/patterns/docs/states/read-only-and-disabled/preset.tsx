import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Read-only can still be focused and copied: try the copy button. Disabled
    can't be reached at all, so the line under it says why. Turn on Pro plan to
    enable it.
  </>
);

const name = 'Read-only and disabled';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
