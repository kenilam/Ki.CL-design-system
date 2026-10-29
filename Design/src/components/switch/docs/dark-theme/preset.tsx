import React from 'react';

// Partials
import { Text } from 'design/components';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';

const description = (
  <>
    Turns this preview dark. The code shows the same switch wired to{' '}
    <Text is='code'>useResponsive</Text> for the whole site.
  </>
);

const name = 'Dark theme';

/*
 * Written out because the preview drives the docs' stage, while a reader's
 * code should use `useResponsive`.
 */
const code = `
const { setTheme, theme } = useResponsive();

<Switch
  checked={theme === 'dark'}
  onCheckedChange={(dark) => setTheme(dark ? 'dark' : 'light')}
  {...props}
>
  Dark theme
</Switch>
`;

const Preset = (
  <Origin code={code} description={description} name={name}>
    <Preview />
  </Origin>
);

export { Preset };
