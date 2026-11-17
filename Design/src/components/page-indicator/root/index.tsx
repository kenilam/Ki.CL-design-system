import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Card, List } from 'design/components';

// Spec
import type * as Spec from 'design/components/page-indicator/spec';

// Context
import { usePageIndicator } from 'design/components/page-indicator/context';

// Constants
import { CLASS_NAME } from 'design/components/page-indicator/constants';

// Partials
import { Pages } from './pages';

type Props = Omit<Spec.Props, 'current' | 'pages'> &
  Pick<React.ComponentProps<'nav'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  className,
  ref,
  sticky = false,
  style,
  ...rest
}) => {
  const { current, pages } = usePageIndicator();

  const card = (
    <Card
      className={classNames(
        CLASS_NAME,
        {
          [`${CLASS_NAME}--follows-current`]: current !== undefined,
          [`${CLASS_NAME}--sticky`]: sticky,
          'kicl-inset-block-center': !sticky,
          'kicl-inset-inline-end-frame': !sticky,
          'kicl-position-fixed': !sticky,
        },
        'kicl-padding-narrow',
        'kicl-pointer-events-none',
        'kicl-z-index-floating',
        className
      )}
      is='nav'
      ref={ref}
      size='fit'
      style={
        {
          '--kicl--components--page-indicator--count': pages.length,
          ...style,
        } as never
      }
      variant='secondary'
      {...rest}
    >
      <List is='ol'>
        <Pages />
      </List>
    </Card>
  );

  if (!sticky) {
    return card;
  }

  // Fills the positioned element it is placed in, without taking room in it.
  return (
    <div
      className={classNames(
        'kicl-inset-0',
        'kicl-pointer-events-none',
        'kicl-position-absolute',
        'kicl-z-index-floating'
      )}
    >
      <div
        className={classNames(`${CLASS_NAME}__rail`, 'kicl-position-sticky')}
      >
        {card}
      </div>
    </div>
  );
};

export { Root };
