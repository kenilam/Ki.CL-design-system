import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

// Libraries
import classNames from 'classnames';

// Spec
import type { PopoverHintProps } from 'design/components/popover/spec';

// Styles
import 'design/components/popover/styles.scss';
import 'design/components/popover/modifiers.scss';
import 'design/components/popover/placement.scss';
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/popover/constants';

// Class names
import { getPlacementClassNames } from 'design/components/popover/class-names';

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
  placement = 'block-start-center',
  style,
  ...rest
}) => {
  const ids = usePopoverIds();
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useSyncOpen(nodeRef, String(rest['aria-hidden']) === 'true');

  const hint = (
    <div
      ref={nodeRef}
      id={`${ids.id}__hint`}
      popover='hint'
      role='tooltip'
      className={classNames(
        getPlacementClassNames({ offset, placement }),
        `${CLASS_NAME}__hint`,
        className
      )}
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
