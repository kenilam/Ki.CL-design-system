import React, { PropsWithChildren } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, List, ListItem } from 'design/components';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

// Partials
import { useLayout } from './use-layout';

const CLASS_NAME = 'kicl--components--navigation';

const Navigation = React.forwardRef<
  HTMLElement,
  Required<PropsWithChildren> & Spec.Props
>(({ children, className, ...props }, ref) => {
  const { is, layout, rest } = useLayout(props);

  const items = React.Children.toArray(children).map((child) => {
    let key = String(child);

    if (React.isValidElement(child)) {
      key = String(child.key);
    }

    return (
      <Animation duration='faster' key={key} property='slide-from-top'>
        <ListItem
          className={`${CLASS_NAME}--list-item`}
          justifyItems={layout.justifyItems}
        >
          {child}
        </ListItem>
      </Animation>
    );
  });

  return (
    <nav {...rest} className={classNames(CLASS_NAME, className)} ref={ref}>
      {is === 'ol' ? (
        <List {...layout} is='ol'>
          {items}
        </List>
      ) : (
        <List {...layout}>{items}</List>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

type NavigationProps = Spec.Props;

export { Navigation, type NavigationProps };
