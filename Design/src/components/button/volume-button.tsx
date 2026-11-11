import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  RangeInput,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { VolumeButtonProps } from './spec';

// Partials
import { Button } from './button';

const VolumeButton: React.FunctionComponent<VolumeButtonProps> = ({
  size,
  variant,
  ...rest
}) => {
  const t = useCopy();
  const slider = useRef<HTMLInputElement>(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button aria-label={t('label_volume')} size={size} variant={variant}>
          <Tb.TbVolume aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onToggle={(event) => {
          if (event.newState !== 'open') {
            return;
          }

          slider.current?.focus({ preventScroll: true });
        }}
        placement='block-start-center'
        variant={variant === 'ghost' ? 'secondary' : variant}
      >
        <RangeInput
          {...rest}
          aria-label={t('label_volume')}
          aria-orientation='vertical'
          className={classNames('kicl-display-block', 'kicl-inline-size-md')}
          max={1}
          min={0}
          ref={slider}
          step={0.01}
        />
      </PopoverContent>
    </Popover>
  );
};

export { VolumeButton };
