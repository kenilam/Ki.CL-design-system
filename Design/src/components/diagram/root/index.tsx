import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Partials
import { Caption } from './caption';
import { Preview } from './preview';

const Root: React.FunctionComponent<
  Pick<React.ComponentProps<'figure'>, 'className' | 'ref'>
> = ({ className, ref }) => {
  return (
    <figure
      className={classNames(
        BASE,
        'kicl-inline-size-full',
        'kicl-margin-block-wide',
        'kicl-max-inline-size-columns-8',
        'kicl-position-relative',
        className
      )}
      ref={ref}
    >
      <div
        className={classNames(
          'kicl-contain-inline-size',
          'kicl-overflow-x-auto',
          'kicl-scroll-fade-inline'
        )}
      >
        <Preview />
      </div>
      <Caption />
    </figure>
  );
};

export { Root };
