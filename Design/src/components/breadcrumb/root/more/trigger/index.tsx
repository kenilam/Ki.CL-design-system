import React from 'react';

// Libraries
import * as Tb from 'react-icons/tb';

// Components
import { Button, PopoverTrigger } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Trigger: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <PopoverTrigger asChild>
      <Button aria-label={t('label_breadcrumb_more')} unstyled>
        <Tb.TbDots aria-hidden />
      </Button>
    </PopoverTrigger>
  );
};

export { Trigger };
