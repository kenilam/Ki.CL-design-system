import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

// Spec
import type { PopoverHintProps } from 'design/components/popover/spec';

// Class names
import { getContentClassNames } from 'design/components/popover/class-names';

// Context
import { usePopoverIds } from 'design/components/popover/context';

// Partials
import { useSyncOpen } from './use-sync-open';

/**
 * Only for words: a panel that opens on hover closes before the pointer
 * reaches it, and touch has no hover.
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
  const ids = usePopoverIds();
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useSyncOpen(nodeRef);

  const hint = (
    <div
      ref={nodeRef}
      id={`${ids.id}__hint`}
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
          ...ids.anchorStyle,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );

  return ids.inline ? createPortal(hint, document.body) : hint;
};

PopoverHint.displayName = 'PopoverHint';

export { PopoverHint };
