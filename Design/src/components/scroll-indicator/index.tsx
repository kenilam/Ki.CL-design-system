import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--scroll-indicator';

// Above the global header, whose blur would otherwise cover it.
const ScrollIndicator = React.forwardRef<HTMLDivElement, Spec.Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        aria-hidden
        className={classNames(
          CLASS_NAME,
          'kicl-inline-size-full',
          'kicl-inset-block-start-0',
          'kicl-inset-inline-start-0',
          'kicl-position-fixed',
          'kicl-print-hidden',
          'kicl-z-index-top',
          className
        )}
        ref={ref}
      />
    );
  }
);

ScrollIndicator.displayName = 'ScrollIndicator';

type ScrollIndicatorProps = Spec.Props;

export { ScrollIndicator, type ScrollIndicatorProps };
