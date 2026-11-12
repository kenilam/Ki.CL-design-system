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

type Props = Omit<Spec.Props, 'pages'> &
  Pick<React.ComponentProps<'nav'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  className,
  ref,
  style,
  ...rest
}) => {
  const pages = usePageIndicator();

  return (
    <Card
      className={classNames(
        CLASS_NAME,
        'kicl-inset-block-center',
        'kicl-inset-inline-end-frame',
        'kicl-padding-narrow',
        'kicl-pointer-events-none',
        'kicl-position-fixed',
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
};

export { Root };
