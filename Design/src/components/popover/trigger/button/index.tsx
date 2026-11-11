import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type { PopoverTriggerProps } from 'design/components/popover/spec';

// Constants
import { CLASS_NAME } from 'design/components/popover/trigger/constants';

// Context
import { usePopoverIds } from 'design/components/popover/context';

// Partials
import { useAttributes } from 'design/components/popover/trigger/use-attributes';

type Props = Omit<PopoverTriggerProps, 'asChild'> & {
  ref?: React.Ref<HTMLButtonElement>;
};

const Button: React.FunctionComponent<Props> = ({
  block,
  children,
  className,
  onClick,
  ref,
  style,
  ...rest
}) => {
  const ids = usePopoverIds();
  const shared = useAttributes();

  return (
    <button
      ref={ref}
      type='button'
      {...shared}
      className={classNames(
        CLASS_NAME,
        'kicl-line-height-narrower',
        { 'kicl-border-radius-sm': block },
        className
      )}
      /*
       * The panel's `toggle` event reports the open state back, so the click
       * handler doesn't set it.
       */
      popoverTarget={ids.id}
      onClick={onClick}
      style={{ ...ids.anchorStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
