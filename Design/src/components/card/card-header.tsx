import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import type { CardHeaderProps, CardSectionIs } from './spec';

const CLASS_NAME = 'kicl--components--card__header';

const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({ children, className, is = 'header', ...rest }, ref) => {
    const Component = is as CardSectionIs;

    return (
      <Layout gap='narrow'>
        <Component
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(CLASS_NAME, className)}
          ref={ref as never}
        >
          {children}
        </Component>
      </Layout>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
