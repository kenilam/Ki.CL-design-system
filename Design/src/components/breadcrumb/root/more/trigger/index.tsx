import React from 'react';

// Libraries
import * as Tb from 'react-icons/tb';

// Components
import { Button } from 'design/components/button';
import { PopoverTrigger } from 'design/components/popover';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Trigger: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <PopoverTrigger asChild>
      <Button aria-label={t('label_breadcrumb_more')} block unstyled>
        <Tb.TbDots aria-hidden />
      </Button>
    </PopoverTrigger>
  );
};

export { Trigger };
