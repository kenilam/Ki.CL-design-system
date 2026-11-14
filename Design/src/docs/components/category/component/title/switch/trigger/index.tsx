import React from 'react';

import * as Tb from 'react-icons/tb';

import { Button, PopoverTrigger } from 'design/components';

import { useCopy } from 'design/locales/use-copy';

const Trigger: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <PopoverTrigger asChild>
      <Button
        aria-label={t('docs_component_parts')}
        block
        size='small'
        variant='secondary'
      >
        <Tb.TbChevronDown aria-hidden />
      </Button>
    </PopoverTrigger>
  );
};

export { Trigger };
