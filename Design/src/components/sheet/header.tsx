import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { CardHeader, type CardHeaderProps } from 'design/components/card';

const CLASS_NAME = 'kicl--components--sheet__header';

const SheetHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({ className, ...rest }, ref) => {
    return (
      <CardHeader
        {...(rest as CardHeaderProps)}
        className={classNames(
          CLASS_NAME,
          'kicl-inset-block-start-0',
          'kicl-padding',
          'kicl-position-sticky',
          'kicl-stuck-line-end',
          'kicl-z-index-raised',
          className
        )}
        ref={ref}
      />
    );
  }
);

SheetHeader.displayName = 'SheetHeader';

export { SheetHeader };
