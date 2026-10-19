import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For a number, like unread messages. <Text is='code'>size='small'</Text>{' '}
    keeps it compact and <Text is='code'>kicl-border-radius-lg</Text> rounds the
    corners.
  </>
);

const name = 'Count';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
