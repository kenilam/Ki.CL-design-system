import React from 'react';

import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

import { GRID_CONTROLS } from 'design/components/list/docs/controls';

import { Preview } from './preview';
import source from './preview.tsx?raw';

const description = (
  <>
    For cards in as many columns as fit. <Text is='code'>fill</Text> sets how
    many of the list's 12 columns each one takes, so <Text is='code'>4</Text> is
    three a row.
  </>
);

const name = 'A grid';

const Preset = (
  <Origin
    code={source}
    controls={GRID_CONTROLS}
    description={description}
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
