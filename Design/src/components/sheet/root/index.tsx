import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Card } from 'design/components/card';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import type { SheetProps } from 'design/components/sheet/spec';

// Constants
import { CLASS_NAME } from 'design/components/sheet/constants';

// Partials
import { Contents } from './contents';
import { useRoot } from './use-root';

type Props = Omit<SheetProps, 'closable' | 'footer' | 'header' | 'id'> & {
  ref?: React.Ref<HTMLElement>;
};

const Root: React.FunctionComponent<Props> = ({
  children,
  className,
  defaultOpen,
  modal,
  onOpenChange,
  popover = 'manual',
  ref,
  side = 'inline-end',
  size = 4,
  style,
  ...rest
}) => {
  const node = useRef<HTMLElement | null>(null);
  const sheet = useRoot(node, {
    defaultOpen,
    labelled: Boolean(rest['aria-label'] || rest['aria-labelledby']),
    modal,
    onOpenChange,
  });

  return (
    <Card
      aria-labelledby={sheet.labelledBy}
      {...rest}
      className={classNames(
        CLASS_NAME,
        `${CLASS_NAME}--${side}`,
        'kicl-overflow-y-auto',
        'kicl-padding-none',
        'kicl-position-fixed',
        className
      )}
      closedby={sheet.closable ? 'any' : 'none'}
      id={sheet.id}
      is='dialog'
      popover={sheet.closable ? popover : 'manual'}
      ref={mergeRefs(node, ref)}
      style={
        {
          [`--${CLASS_NAME}--inline-size`]: `var(--kicl-columns-${size})`,
          ...style,
        } as React.CSSProperties
      }
    >
      {sheet.shown ? <Contents>{children}</Contents> : null}
    </Card>
  );
};

export { Root };
