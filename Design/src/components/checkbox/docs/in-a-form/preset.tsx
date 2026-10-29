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
    For a box a form needs ticked, like accepting terms. It has no label prop,
    since its text is its name, so it goes in a <Text is='code'>FormItem</Text>{' '}
    with its message.
  </>
);

const name = 'In a form';

const Preset = (
  <Origin
    controls={{ checked: null }}
    code={source}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
