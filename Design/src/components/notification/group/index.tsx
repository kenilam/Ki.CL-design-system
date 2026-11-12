import React from 'react';

// Libraries
import classNames from 'classnames';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { mergeRefs } from 'design/helper';

// Styles
import './styles.scss';

// Spec
import type { NotificationGroupProps } from 'design/components/notification/spec';

// Constants
import { CLASS_NAME } from './constants';

// Partials
import { Items } from './items';
import { useGroup } from './use-group';

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
    const t = useCopy();
    const { id, node, shown } = useGroup({
      closable,
      defaultOpen,
      id: rest.id,
      onOpenChange,
    });

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
        {shown ? <Items>{children}</Items> : null}
      </section>
    );
  }
);

NotificationGroup.displayName = 'NotificationGroup';

export { NotificationGroup };
