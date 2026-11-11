import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Partials
import { Theme } from './theme';

// Constants
import { THEMES } from './constants';

const Themes: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();

  return (
    <List fill={isNarrow ? 12 : 6} gap='normal'>
      {THEMES.map((theme) => {
        return <Theme key={theme} theme={theme} />;
      })}
    </List>
  );
};

export { Themes };
