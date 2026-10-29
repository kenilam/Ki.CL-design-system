import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type { PopoverTriggerProps } from 'design/components/popover/spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as POPOVER } from 'design/components/popover/constants';

// Context
import { usePopover } from 'design/components/popover/context';

const CLASS_NAME = `${POPOVER}__trigger`;

const toggle = (panel: HTMLElement, source: HTMLElement) => {
  const popover = panel as HTMLElement & {
    togglePopover: (options?: { source?: HTMLElement }) => boolean;
  };

  /*
   * With `source` the browser treats the trigger as the invoker, so a second
   * click isn't an outside click that dismisses and reopens. Older browsers
   * reject the option.
   */
  try {
    popover.togglePopover({ source });
  } catch {
    popover.togglePopover();
  }
};

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild, children, className, onClick, style, ...rest }, ref) => {
    const popover = usePopover();
    const anchor = { [`--${POPOVER}--anchor`]: popover.anchor };

    const shared = {
      ...(popover.content
        ? {
            'aria-expanded': popover.open,
            'aria-haspopup': 'dialog' as const,
          }
        : null),
      id: `${popover.id}__trigger`,
      // `interestfor` isn't in React's DOM types yet, so it's passed as written.
      ...(popover.hint
        ? {
            'aria-describedby': `${popover.id}__hint`,
            interestfor: `${popover.id}__hint`,
          }
        : null),
    };

    // `popovertarget` only works on buttons, so the child toggles by script.
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;

      return React.cloneElement(child, {
        ...shared,
        ...(rest as React.HTMLAttributes<HTMLElement>),
        ...child.props,
        className: classNames(CLASS_NAME, className, child.props.className),
        style: { ...anchor, ...style, ...child.props.style },
        onClick: (event: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(event);
          onClick?.(event as React.MouseEvent<HTMLButtonElement>);

          const panel = document.getElementById(popover.id);

          if (event.defaultPrevented || !panel) {
            return;
          }

          event.preventDefault();
          toggle(panel, event.currentTarget);
        },
        ref: ref as React.Ref<HTMLElement>,
      });
    }

    return (
      <button
        ref={ref}
        type='button'
        {...shared}
        className={classNames(
          CLASS_NAME,
          'kicl-line-height-narrower',
          className
        )}
        /*
         * The panel's `toggle` event reports the open state back, so the click
         * handler doesn't set it.
         */
        popoverTarget={popover.id}
        onClick={onClick}
        style={{ ...anchor, ...style }}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
