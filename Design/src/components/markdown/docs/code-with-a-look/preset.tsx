import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Colours code by what it means, like the state of a job. Put confirm, error,
    info, warning or secondary in braces straight after it, as in{' '}
    <Text is='code'>{'`DONE`{confirm}'}</Text>.
  </>
);

const name = 'Code with a look';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
