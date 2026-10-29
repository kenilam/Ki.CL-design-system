import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { CardFooter, type CardFooterProps } from 'design/components/card';

const CLASS_NAME = 'kicl--components--sheet__footer';

const SheetFooter = React.forwardRef<HTMLElement, CardFooterProps>(
  ({ className, ...rest }, ref) => {
    return (
      <CardFooter
        {...rest}
        className={classNames(
          CLASS_NAME,
          'kicl-stuck-line-start',
          'kicl-padding',
          className
        )}
        ref={ref}
      />
    );
  }
);

SheetFooter.displayName = 'SheetFooter';

export { SheetFooter };
