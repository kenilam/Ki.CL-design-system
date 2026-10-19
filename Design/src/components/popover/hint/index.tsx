import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// Spec
import type { PopoverHintProps } from 'design/components/popover/spec';

// Class names
import { getContentClassNames } from 'design/components/popover/content/class-names';

// Constants
import { CLASS_NAME as POPOVER } from 'design/components/popover/constants';

// Context
import { usePopover } from 'design/components/popover/context';

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
  const nodeRef = useRef<HTMLDivElement | null>(null);

  // Lets the trigger know there is a hint to point at.
  useEffect(() => {
    setHint(true);

    return () => setHint(false);
  }, [setHint]);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node || popover.content) {
      return;
    }

    const shown = node.matches(':popover-open');

    if (popover.open && !shown) {
      node.showPopover();
    }

    if (!popover.open && shown) {
      node.hidePopover();
    }
  }, [popover.content, popover.open]);

  const hint = (
    <div
      ref={nodeRef}
      id={`${popover.id}__hint`}
      popover='hint'
      role='tooltip'
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
