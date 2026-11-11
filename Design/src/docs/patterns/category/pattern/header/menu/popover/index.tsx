import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { Sidebar } from 'design/docs/patterns/sidebar';

const MenuPopover: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label={t('docs_components_open')}
          size='small'
          variant='secondary'
        >
          <Tb.TbMenu2 aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='kicl-inline-size-xxl'
        offset='wide'
        placement='inline-start-start'
        style={
          {
            '--kicl--components--popover--fallbacks':
              '--kicl--components--popover--block-end--start',
            '--kicl--components--popover--fallback-offset':
              'var(--kicl-gutter-narrow)',
          } as React.CSSProperties
        }
      >
        <Sidebar />
      </PopoverContent>
    </Popover>
  );
};

export { MenuPopover };
