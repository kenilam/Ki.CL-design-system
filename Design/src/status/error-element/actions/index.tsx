import React from 'react';

// Components
import { Menu } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { Home } from './home';
import { Reload } from './reload';

const Actions: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Menu aria-label={t('title_error')} justifyContent='end'>
      <Reload />
      <Home />
    </Menu>
  );
};

export { Actions };
