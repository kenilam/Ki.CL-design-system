import React, { useCallback, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import type { PopoverTriggerProps } from 'design/components/popover/spec';

// Constants
import { CLASS_NAME } from 'design/components/popover/trigger/constants';

// Context
import { usePopoverIds } from 'design/components/popover/context';

// Partials
import { toggle } from './toggle';
import { useAttributes } from 'design/components/popover/trigger/use-attributes';
import { useInterest } from 'design/components/popover/trigger/use-interest';

type Props = Omit<PopoverTriggerProps, 'asChild'> & {
  ref?: React.Ref<HTMLButtonElement>;
};

// `popovertarget` only works on buttons, so the child toggles by script.
const Child: React.FunctionComponent<Props> = ({
  block,
  children,
  className,
  onClick,
  ref,
  style,
  ...rest
}) => {
  const ids = usePopoverIds();
  const shared = useAttributes();
  const [node, setNode] = useState<HTMLElement | null>(null);
  const attach = useCallback(
    (element: HTMLElement | null) => {
      mergeRefs(ref, setNode)(element);
    },
    [ref]
  );
  const child = children as React.ReactElement<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
  >;

  useInterest(node);

  return React.cloneElement(child, {
    ...shared,
    ...(rest as React.HTMLAttributes<HTMLElement>),
    ...child.props,
    className: classNames(
      CLASS_NAME,
      { 'kicl-border-radius-sm': block },
      className,
      child.props.className
    ),
    style: { ...ids.anchorStyle, ...style, ...child.props.style },
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      child.props.onClick?.(event);
      onClick?.(event as React.MouseEvent<HTMLButtonElement>);

      const panel = document.getElementById(ids.id);

      if (event.defaultPrevented || !panel) {
        return;
      }

      event.preventDefault();
      toggle(panel, event.currentTarget);
    },
    ref: attach,
  });
};

export { Child };
