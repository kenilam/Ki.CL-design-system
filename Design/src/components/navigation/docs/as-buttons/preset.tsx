import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    Links that look like buttons, for a few that should stand out. Put{' '}
    <Text is='code'>lookLikeButton</Text> on each{' '}
    <Text is='code'>HyperLink</Text>.
  </>
);

const name = 'As buttons';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
