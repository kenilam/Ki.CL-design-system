import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Opens from a real button, like an Options menu.{' '}
    <Text is='code'>asChild</Text> on <Text is='code'>PopoverTrigger</Text>{' '}
    makes your <Text is='code'>Button</Text> the trigger instead of wrapping it
    in another one.
  </>
);

const name = 'Button trigger';

const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
