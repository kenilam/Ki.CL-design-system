import React from 'react';
import classNames from 'classnames';

import type { Props, SeparatorIs } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--separator';

const Separator = React.forwardRef<HTMLElement, Props>(
  (
    {
      className,
      is = 'span',
      orientation = 'horizontal',
      variant = 'solid',
      ...rest
    },
    ref
  ) => {
    const Component = is as SeparatorIs;

    return (
      <Component
        {...(rest as React.HTMLAttributes<HTMLElement>)}
        aria-orientation={
          is === 'hr' && orientation === 'vertical' ? orientation : undefined
        }
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--${orientation}`,
          `${CLASS_NAME}--variant--${variant}`,
          orientation === 'horizontal'
            ? ['kicl-display-block', 'kicl-inline-size-full']
            : 'kicl-display-inline-block',
          className
        )}
        ref={ref as never}
        role={is === 'span' ? 'none' : undefined}
      />
    );
  }
);

Separator.displayName = 'Separator';

export type { Props as SeparatorProps, SeparatorIs } from './spec';
export { SEPARATOR_VARIANTS } from './spec';
export { Separator };
