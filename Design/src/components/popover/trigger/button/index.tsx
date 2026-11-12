import React, { useCallback, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import type { PopoverTriggerProps } from 'design/components/popover/spec';

// Constants
import { CLASS_NAME } from 'design/components/popover/trigger/constants';

// Context
import { usePopoverIds } from 'design/components/popover/context';

// Partials
import { useAttributes } from 'design/components/popover/trigger/use-attributes';
import { useInterest } from 'design/components/popover/trigger/use-interest';

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
  const [node, setNode] = useState<HTMLButtonElement | null>(null);
  const attach = useCallback(
    (element: HTMLButtonElement | null) => {
      mergeRefs(ref, setNode)(element);
    },
    [ref]
  );

  useInterest(node);

  return (
    <button
      ref={attach}
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
