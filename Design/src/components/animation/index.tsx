import React, { FunctionComponent } from 'react';

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

// Partials
import { clone } from './clone';
import { useLeave } from './use-leave';

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
  const { left, leave } = useLeave(transitionIn);

  if (!transitionIn && left) {
    return null;
  }

  const child = React.Children.only(children);

  if (!React.isValidElement(child)) {
    return child;
  }

  return clone(child, {
    className,
    delay,
    duration,
    easing,
    in: transitionIn,
    leave,
    nodeRef,
    property,
    rest,
  });
};

type AnimationProps = Spec.Props;

export { Animation, type AnimationProps };
