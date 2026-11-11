import React from 'react';

// Hooks
import { useResponsive } from 'design/hooks';

// Partials
import { MenuPopover } from './popover';
import { MenuSheet } from './sheet';

const Menu: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();

  return isNarrow ? <MenuSheet /> : <MenuPopover />;
};

export { Menu };
