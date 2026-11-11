import React from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import type * as Spec from './spec';

// Constants
import { CLASS_NAME } from './constants';

// Partials
import { styleOf } from './style-of';
import type { useLeave } from './use-leave';

type Child = {
  className?: string;
  onTransitionCancel?: React.TransitionEventHandler<HTMLElement>;
  onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
  ref?: React.Ref<HTMLElement | null>;
  style?: React.CSSProperties;
};

type Options = Required<
  Pick<Spec.Options, 'duration' | 'easing' | 'in' | 'property'>
> &
  Pick<Spec.Options, 'className' | 'nodeRef'> &
  Pick<ReturnType<typeof useLeave>, 'leave'> & {
    delay?: number | string;
    rest: Record<string, unknown>;
  };

const clone = (
  child: React.ReactElement,
  {
    className,
    delay,
    duration,
    easing,
    in: transitionIn,
    leave,
    nodeRef,
    property,
    rest,
  }: Options
) => {
  const props = child.props as Child;
  const handlers = rest as Pick<
    Child,
    'onTransitionCancel' | 'onTransitionEnd'
  >;

  return React.cloneElement(
    child as React.ReactElement<Record<string, unknown>>,
    {
      ...rest,
      className: classNames(
        CLASS_NAME,
        `${CLASS_NAME}--property--${property}`,
        props.className,
        className
      ),
      'data-animation-in': transitionIn ? '' : undefined,
      onTransitionCancel: leave(
        handlers.onTransitionCancel ?? props.onTransitionCancel
      ),
      onTransitionEnd: leave(handlers.onTransitionEnd ?? props.onTransitionEnd),
      // The child may already own a ref, and `cloneElement` would drop it.
      ref: mergeRefs(nodeRef, props.ref),
      style: styleOf({ delay, duration, easing, style: props.style }),
    }
  );
};

export { clone };
