import React, { PropsWithChildren } from 'react';

// Components
import { Layout, ListItem } from 'design/components';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--menu';

const Menu = React.forwardRef<
  HTMLMenuElement,
  Required<PropsWithChildren> & Spec.Props
>(({ autoFlow = 'column', children, gap = 'normal', ...rest }, ref) => {
  return (
    <Layout {...rest} autoFlow={autoFlow} gap={gap}>
      <menu className={CLASS_NAME} ref={ref}>
        {React.Children.toArray(children).map((child) => {
          let key = String(child);

          if (React.isValidElement(child)) {
            key = String(child.key);
          }

          return <ListItem key={key}>{child}</ListItem>;
        })}
      </menu>
    </Layout>
  );
});

Menu.displayName = 'Menu';

type MenuProps = Spec.Props;

export { Menu, type MenuProps };
