import React from 'react';

// Components
import { Popover, PopoverContent } from 'design/components';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// Partials
import { Menu } from './menu';
import { Trigger } from './trigger';

const More: React.FunctionComponent = () => {
  const {
    menu: [crumb],
  } = useBreadcrumb();

  if (!crumb) {
    return null;
  }

  return (
    <Popover>
      <Trigger />
      <PopoverContent placement='block-end-start'>
        <Menu to={crumb.to} />
      </PopoverContent>
    </Popover>
  );
};

export { More };
