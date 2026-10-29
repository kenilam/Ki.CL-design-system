import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    More than one paragraph renders as blocks: <Text is='code'>#</Text> for a
    heading, <Text is='code'>-</Text> or <Text is='code'>1.</Text> for a list,{' '}
    <Text is='code'>&gt;</Text> for a quote and <Text is='code'>---</Text> for a
    rule. A heading&apos;s level is its number of <Text is='code'>#</Text>, so
    pick the one that fits the page.
  </>
);

const name = 'A document';

/** The preset as `Preview` reads it, with the example's own file as its code. */
const Preset = (
  <Origin code={source} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
