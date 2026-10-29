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

/**
 * `delay` also takes a CSS time here, for a component that waits on a duration
 * token. The spec keeps milliseconds, so the props built on it can still add.
 */
type Props = React.PropsWithChildren<
  Omit<Spec.Options, 'delay'> & {
    delay?: number | string;
  } & Record<string, unknown>
>;

/**
 * Applies an entering and leaving transition to its only child, and takes the
 * child out of the page once it has left.
 *
 * The choreography is entirely CSS. `@starting-style` supplies the value to
 * animate *from* when the element first renders, and
 * `transition-behavior: allow-discrete` keeps the element displayed until the
 * leaving transition has finished. Both are in `styles.scss`; nothing here
 * schedules or times anything.
 *
 * What is left for this component is the part CSS cannot express: which style
 * to use, the three values that vary per instance, which go on the element as
 * custom properties rather than into a stylesheet, and unmounting the child on
 * the element's own `transitionend`, so nothing that has left stays in the DOM
 * or keeps running.
 */
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
  /*
   * Whether the child has finished leaving. Reset on every change of `in`,
   * during render, so a child that comes back is there on the same render and
   * one that leaves keeps its element until its transition ends.
   */
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

  /*
   * Its own transitions only: one that ends on a descendant bubbles up here
   * too. A cancelled one counts, so an element whose transition was cut short
   * still goes.
   */
  const leave =
    (handler?: React.TransitionEventHandler<HTMLElement>) =>
    (event: React.TransitionEvent<HTMLElement>) => {
      handler?.(event);

      if (!transitionIn && event.target === event.currentTarget) {
        setLeft(true);
      }
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
      /*
       * An attribute rather than a class because it is state, not identity -
       * and it gives the stylesheet a `:not()` to hang the leaving values on
       * without inventing a second class name for the negative case.
       */
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
