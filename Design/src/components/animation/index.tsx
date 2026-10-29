import React, { FunctionComponent, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Helpers
import { mergeRefs } from 'design/helper';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';
import './styles.blur.scss';
import './styles.fade.scss';
import './styles.slide-from-top.scss';
import './styles.slide-from-left.scss';
import './styles.slide-from-right.scss';
import './styles.slide-from-bottom.scss';
import './styles.zoom-in.scss';
import './styles.zoom-out.scss';

const CLASS_NAME = 'kicl--components--animation';

// The spec keeps `delay` in milliseconds so props built on it can add to it.
type Props = React.PropsWithChildren<
  Omit<Spec.Options, 'delay'> & {
    delay?: number | string;
  } & Record<string, unknown>
>;

const Animation: FunctionComponent<Props> = ({
  delay,
  duration = 'fast',
  easing = 'ease-sharp-in-out',
  property = 'fade',
  children,
  className,
  in: transitionIn = true,
  nodeRef,
  ...rest
}) => {
  // Reset during render, not in an effect, so a child that comes back shows on
  // the same render.
  const [left, setLeft] = useState(!transitionIn);
  const [previous, setPrevious] = useState(transitionIn);

  if (previous !== transitionIn) {
    setPrevious(transitionIn);
    setLeft(false);
  }

  if (!transitionIn && left) {
    return null;
  }

  const child = React.Children.only(children);

  if (!React.isValidElement(child)) {
    return child;
  }

  const props = child.props as {
    className?: string;
    onTransitionCancel?: React.TransitionEventHandler<HTMLElement>;
    onTransitionEnd?: React.TransitionEventHandler<HTMLElement>;
    ref?: React.Ref<HTMLElement | null>;
    style?: React.CSSProperties;
  };

  const handlers = rest as Pick<
    typeof props,
    'onTransitionCancel' | 'onTransitionEnd'
  >;

  // Transition events bubble from descendants, so only the element's own count.
  const leave = (handler?: React.TransitionEventHandler<HTMLElement>) => {
    return (event: React.TransitionEvent<HTMLElement>) => {
      handler?.(event);

      if (!transitionIn && event.target === event.currentTarget) {
        setLeft(true);
      }
    };
  };

  const style = {
    [`--${CLASS_NAME}--transition-duration`]: `var(--kicl-transition-duration-${duration})`,
    [`--${CLASS_NAME}--transition-timing-function`]: `var(--kicl-${easing})`,
    ...props.style,
  } as React.CSSProperties;

  if (delay !== undefined) {
    style[`--${CLASS_NAME}--transition-delay`] =
      typeof delay === 'number' ? `${delay}ms` : delay;
  }

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
      style,
    }
  );
};

type AnimationProps = Spec.Props;

export { Animation, type AnimationProps };
