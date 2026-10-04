import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type { PopoverTriggerProps } from '../spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as POPOVER } from '../constants';

// Context
import { usePopover } from '../context';

const CLASS_NAME = `${POPOVER}__trigger`;

/** Toggles the panel by script, naming the trigger as its invoker. */
const toggle = (panel: HTMLElement, source: HTMLElement) => {
  const popover = panel as HTMLElement & {
    togglePopover: (options?: { source?: HTMLElement }) => boolean;
  };

  /*
   * With a source the browser treats the element as the invoker, as it does a
   * button with `popovertarget`: clicking it again isn't an outside click that
   * dismisses and reopens, and Tab moves on into the panel. Older browsers
   * reject the option, and toggle without it.
   */
  try {
    popover.togglePopover({ source });
  } catch {
    popover.togglePopover();
  }
};

const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ asChild, children, className, onClick, ...rest }, ref) => {
    const popover = usePopover();

    const shared = {
      // Only a trigger with a panel opens anything.
      ...(popover.content && {
        'aria-expanded': popover.open,
        'aria-haspopup': 'dialog' as const,
      }),
      'data-slot': 'popover-trigger',
      id: `${popover.id}__trigger`,
      /*
       * Hover and focus open the hint by themselves. React passes the
       * attribute through as written; it isn't in the DOM types yet.
       */
      ...(popover.hint && {
        'aria-describedby': `${popover.id}__hint`,
        interestfor: `${popover.id}__hint`,
      }),
    };

    /*
     * The child stays itself, a link included, and takes on the trigger's
     * part: the anchor name, the state for assistive tech, and the toggle.
     * `popovertarget` only works on buttons, so the click toggles by script;
     * a link's own navigation is what's left without it.
     */
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;

      return React.cloneElement(child, {
        ...shared,
        ...(rest as React.HTMLAttributes<HTMLElement>),
        ...child.props,
        className: classNames(CLASS_NAME, className, child.props.className),
        onClick: (event: React.MouseEvent<HTMLElement>) => {
          child.props.onClick?.(event);
          onClick?.(event as React.MouseEvent<HTMLButtonElement>);

          const panel = document.getElementById(popover.id);

          /*
           * With no panel to open - a trigger that only has a hint - the
           * click is the child's own, and a link just follows its href.
           */
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
        className={classNames(CLASS_NAME, className)}
        /*
         * The browser toggles the panel from this attribute. The handler is
         * passed through untouched and no longer sets state - whatever
         * happens, the `toggle` event on the panel is what reports it back.
         */
        popoverTarget={popover.id}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
