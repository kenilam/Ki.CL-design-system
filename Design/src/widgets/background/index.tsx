import React from 'react';

// Libraries
import classNames from 'classnames';

// Hooks
import { useResizeObserver } from 'design/hooks';

// Spec
import type * as Spec from './spec';

// Partials
import { useDither } from './use-dither';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

const Background: React.FunctionComponent<Spec.Props> = ({
  className,
  ...rest
}) => {
  const { node, rect } = useResizeObserver<HTMLCanvasElement>();

  useDither(node, rect?.width ?? 0, rect?.height ?? 0);

  return (
    <canvas
      aria-hidden
      className={classNames(
        CLASS_NAME,
        'kicl-block-size-full',
        'kicl-inline-size-full',
        'kicl-inset-0',
        'kicl-pointer-events-none',
        'kicl-position-absolute',
        className
      )}
      {...rest}
      // After the spread, so a wrapper's ref such as Animation's can't replace it.
      ref={node}
    />
  );
};

type BackgroundProps = Spec.Props;

export { Background, type BackgroundProps };
