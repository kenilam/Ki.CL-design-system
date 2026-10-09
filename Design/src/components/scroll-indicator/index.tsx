import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--scroll-indicator';

/**
 * A thin bar along the top edge of the window that fills as the page scrolls.
 * It is above the global header, whose blur would otherwise cover it. It says
 * nothing a scrollbar doesn't, so it is hidden from assistive tech, and it is
 * not printed.
 */
const ScrollIndicator = React.forwardRef<HTMLDivElement, Spec.Props>(
  ({ className, ...rest }, ref) => (
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
  )
);

ScrollIndicator.displayName = 'ScrollIndicator';

type ScrollIndicatorProps = Spec.Props;

export { ScrollIndicator, type ScrollIndicatorProps };
