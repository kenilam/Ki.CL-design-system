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
    Without <Text is='code'>showLabel</Text>, only the icon shows, and screen
    readers still hear its name.
  </>
);

const name = 'Copies, icon only';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin
    controls={{ lookLikeHyperLink: null, unstyled: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
