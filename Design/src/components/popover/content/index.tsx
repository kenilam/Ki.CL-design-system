import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import type { PopoverContentProps } from 'design/components/popover/spec';

// Styles
import 'design/components/popover/styles.scss';
import 'design/components/popover/modifiers.scss';
import 'design/components/popover/placement.scss';

// Class names
import { getContentClassNames } from 'design/components/popover/class-names';

// Context
import { usePopoverIds } from 'design/components/popover/context';

// Partials
import { useContent } from './use-content';

const PopoverContent = React.forwardRef<HTMLElement, PopoverContentProps>(
  (
    {
      children,
      className,
      forceMount,
      offset = 'narrow',
      placement = 'block-end',
      style,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const ids = usePopoverIds();

    const isLabelled = Boolean(rest['aria-label'] || rest['aria-labelledby']);
    const nodeRef = useRef<HTMLElement | null>(null);
    const shown = useContent(nodeRef);

    const panel = (
      <section
        ref={mergeRefs(nodeRef, ref)}
        id={ids.id}
        popover='auto'
        role='dialog'
        aria-labelledby={isLabelled ? undefined : `${ids.id}__trigger`}
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
        {shown || forceMount ? children : null}
      </section>
    );

    return ids.inline ? createPortal(panel, document.body) : panel;
  }
);

PopoverContent.displayName = 'PopoverContent';

export { PopoverContent };
