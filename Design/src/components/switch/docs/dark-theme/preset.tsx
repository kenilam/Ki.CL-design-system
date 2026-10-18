import React from 'react';

// Partials
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';

const name = 'Dark theme';

/*
 * Written out, not read from the file: the example switches the docs' stage
 * through a hook of its own, and the reader's code uses `useTheme`.
 */
const code = `
const { setTheme, theme } = useTheme();

<Switch
  checked={theme === 'dark'}
  onCheckedChange={(dark) => setTheme(dark ? 'dark' : 'light')}
>
  Dark theme
</Switch>
`;

const Preset = (
  <Origin code={code} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
