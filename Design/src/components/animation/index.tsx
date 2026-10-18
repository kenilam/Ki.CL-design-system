import React, { FunctionComponent } from 'react';

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
 * Applies an entering and leaving transition to its only child.
 *
 * The choreography is entirely CSS. `@starting-style` supplies the value to
 * animate *from* when the element first renders or comes back from
 * `display: none`, and `transition-behavior: allow-discrete` keeps the element
 * displayed until the leaving transition has finished. Both are in
 * `Styles.scss`; nothing here schedules, measures, or times anything.
 *
 * What is left for this component is the part CSS cannot express: which style
 * to use, and the three values that vary per instance, which go on the element
 * as custom properties rather than into a stylesheet.
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
  const child = React.Children.only(children);

  if (!React.isValidElement(child)) {
    return child;
  }

  const props = child.props as {
    className?: string;
    ref?: React.Ref<HTMLElement | null>;
    style?: React.CSSProperties;
  };

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
      // The child may already own a ref, and `cloneElement` would drop it.
      ref: mergeRefs(nodeRef, props.ref),
      style: {
        ...(delay === undefined
          ? {}
          : {
              [`--${CLASS_NAME}--transition-delay`]:
                typeof delay === 'number' ? `${delay}ms` : delay,
            }),
        [`--${CLASS_NAME}--transition-duration`]: `var(--kicl-transition-duration-${duration})`,
        [`--${CLASS_NAME}--transition-timing-function`]: `var(--kicl-${easing})`,
        ...props.style,
      } as React.CSSProperties,
    }
  );
};

type AnimationProps = Spec.Props;

export { Animation, type AnimationProps };
