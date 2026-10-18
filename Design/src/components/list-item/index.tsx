import React, { PropsWithChildren } from 'react';

// Components
import { Layout } from 'design/components';

// Spec
import * as Spec from './spec';

type ListItemProps = Required<PropsWithChildren> & Spec.Props;

const CLASS_NAME = 'kicl--components--list-item';

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...rest }, ref) => (
    // Layout takes its own props and passes the rest on to the item.
    <Layout {...rest} ref={ref}>
      <li className={CLASS_NAME}>{children}</li>
    </Layout>
  )
);

ListItem.displayName = 'ListItem';

export { ListItem, type ListItemProps };
