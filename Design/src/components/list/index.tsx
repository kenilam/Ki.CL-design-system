import React from 'react';

import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Spec
import * as Spec from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--list';

const List = React.forwardRef<HTMLOListElement | HTMLUListElement, Spec.Props>(
  (
    {
      children,
      gap = 'normal',
      is: Component = 'ul',
      listStyleType,
      style,
      ...rest
    },
    ref
  ) => (
    // Layout takes its own props and passes the rest on to the list.
    <Layout {...rest} gap={gap}>
      <Component
        className={classNames(
          CLASS_NAME,
          listStyleType && `${CLASS_NAME}--list-style`
        )}
        ref={ref as never}
        style={{ ...style, listStyleType }}
      >
        {children}
      </Component>
    </Layout>
  )
);

List.displayName = 'List';

type ListProps = Spec.Props;

export { List, type ListProps };
