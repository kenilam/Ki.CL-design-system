import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// Spec
import type { PopoverHintProps } from '../spec';

// Class names
import { getContentClassNames } from '../content/class-names';

// Constants
import { CLASS_NAME as POPOVER } from '../constants';

// Context
import { usePopover } from '../context';

/**
 * A short note that shows while the trigger is hovered or focused, such as
 * what a highlighted phrase means. The trigger points at it with
 * `interestfor`, so the browser opens and closes it, with its own delays, and
 * no script runs. Browsers without `interestfor` don't show it; the trigger
 * still names it with `aria-describedby`, so assistive tech reads it anyway.
 *
 * Only for words. Anything to click belongs in `PopoverContent`, because a
 * panel that opens on hover is gone before the pointer reaches it, and touch
 * has no hover at all.
 */
const PopoverHint: React.FC<PopoverHintProps> = ({
  children,
  className,
  offset,
  placement = 'block-start',
  style,
  variant,
  ...rest
}) => {
  const popover = usePopover();
  const { setHint } = popover;

  // Lets the trigger know there is a hint to point at.
  useEffect(() => {
    setHint(true);

    return () => setHint(false);
  }, [setHint]);

  const hint = (
    <div
      id={`${popover.id}__hint`}
      popover='hint'
      role='tooltip'
      data-slot='popover-hint'
      className={getContentClassNames({
        className,
        offset,
        placement,
        variant,
      })}
      style={
        {
          [`--${POPOVER}--anchor`]: popover.anchor,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );

  return popover.inline ? createPortal(hint, document.body) : hint;
};

PopoverHint.displayName = 'PopoverHint';

export { PopoverHint };
