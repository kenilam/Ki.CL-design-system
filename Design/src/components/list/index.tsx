import React from 'react';

// Components
import { Layout } from 'design/components';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--list';

const List = React.forwardRef<HTMLOListElement | HTMLUListElement, Spec.Props>(
  ({ children, gap = 'normal', is: Component = 'ul', ...rest }, ref) => (
    // Layout takes its own props and passes the rest on to the list.
    <Layout {...rest} gap={gap}>
      <Component className={CLASS_NAME} ref={ref as never}>
        {children}
      </Component>
    </Layout>
  )
);

List.displayName = 'List';

type ListProps = Spec.Props;

export { List, type ListProps };
