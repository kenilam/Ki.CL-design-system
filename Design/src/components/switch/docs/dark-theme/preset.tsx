import React from 'react';

// Partials
import { Copy } from 'design/docs/mdx/copy';
import { Preset as Origin } from 'design/docs/mdx/preview';

// Preview
import { Preview } from './preview';

const description = <Copy id='switch_preset_dark_theme' />;

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
  <Origin
    code={code}
    description={description}
    label='switch_preset_dark_theme_name'
    name={name}
  >
    <Preview />
  </Origin>
);

export { Preset };
