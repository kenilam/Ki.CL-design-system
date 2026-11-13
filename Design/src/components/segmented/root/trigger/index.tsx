import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { Button } from 'design/components/button';
import { PopoverTrigger } from 'design/components/popover';

// Context
import { useChoice, useSegmented } from 'design/components/segmented/context';

// Partials
import { labelOf } from 'design/components/segmented/children';

const CLASS_NAME = 'kicl--components--segmented__trigger';

const SegmentedTrigger: React.FunctionComponent = () => {
  const { children, disabled, id } = useSegmented();
  const { chosen, value } = useChoice();

  return (
    <PopoverTrigger asChild>
      <Button
        after={<Tb.TbChevronDown aria-hidden />}
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-justify-self-start',
          'kicl-min-block-size-field'
        )}
        id={`${id}__trigger`}
        disabled={disabled}
        size='small'
        variant='ghost'
      >
        {labelOf(children, value ?? chosen) ?? null}
      </Button>
    </PopoverTrigger>
  );
};

export { SegmentedTrigger };
