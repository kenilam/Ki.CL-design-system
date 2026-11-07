import React, { useEffect, useId, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { mergeRefs } from 'design/helper';

// Hooks
import { useOverlayContents } from 'design/hooks';

// Spec
import type { NotificationGroupProps } from './spec';

const CLASS_NAME = 'kicl--components--notification-group';

const NotificationGroup = React.forwardRef<HTMLElement, NotificationGroupProps>(
  (
    {
      children,
      className,
      closable = true,
      defaultOpen = false,
      onOpenChange,
      side = 'inline-end',
      ...rest
    },
    ref
  ) => {
    const generated = useId();
    const id = rest.id ?? generated;
    const node = useRef<HTMLElement | null>(null);
    const t = useCopy();
    const shown = useOverlayContents(node, defaultOpen);
    const opening = useRef(defaultOpen);
    const report = useRef(onOpenChange);
    const dismissable = useRef(closable);

    useEffect(() => {
      report.current = onOpenChange;
      dismissable.current = closable;
    }, [closable, onOpenChange]);

    useEffect(() => {
      const element = node.current;

      if (!element) {
        return;
      }

      const toggle = (event: Event) => {
        report.current?.((event as ToggleEvent).newState === 'open');
      };

      const keydown = (event: KeyboardEvent) => {
        if (
          event.key === 'Escape' &&
          dismissable.current &&
          element.matches(':popover-open')
        ) {
          element.hidePopover();
        }
      };

      element.addEventListener('toggle', toggle);
      element.addEventListener('keydown', keydown);

      if (opening.current && !element.matches(':popover-open')) {
        element.showPopover();
      }

      return () => {
        element.removeEventListener('toggle', toggle);
        element.removeEventListener('keydown', keydown);
      };
    }, []);

    return (
      <section
        aria-label={t('notifications')}
        {...rest}
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--${side}`,
          'kicl-position-fixed',
          className
        )}
        id={id}
        popover='manual'
        ref={mergeRefs(node, ref)}
      >
        {shown ? (
          <List
            className={classNames(
              `${CLASS_NAME}__list`,
              'kicl-position-relative'
            )}
            gap='narrow'
            is='ol'
          >
            {React.Children.toArray(children).map((child, index) => (
              <ListItem
                className={`${CLASS_NAME}__item`}
                key={React.isValidElement(child) ? child.key : index}
                style={
                  { [`--${CLASS_NAME}--index`]: index } as React.CSSProperties
                }
              >
                {child}
              </ListItem>
            ))}
          </List>
        ) : null}
      </section>
    );
  }
);

NotificationGroup.displayName = 'NotificationGroup';

export { NotificationGroup };
