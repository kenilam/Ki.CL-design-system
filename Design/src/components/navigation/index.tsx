import React, { PropsWithChildren } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Animation,
  type AnimationProps,
  List,
  ListItem,
} from 'design/components';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--navigation';

const Navigation = React.forwardRef<
  HTMLElement,
  Required<PropsWithChildren> & Spec.Props
>(
  (
    {
      children,
      className,

      alignContent,
      alignItems,
      autoFlow,
      frames,
      fullScreen,
      gap = 'normal',
      is = 'ul',
      justifyContent,
      justifyItems,
      wrap,

      ...rest
    },
    ref
  ) => {
    const animation: AnimationProps = {
      duration: 'faster',
      property: 'slide-from-top',
    };

    const layout = {
      alignContent,
      alignItems,
      autoFlow,
      frames,
      fullScreen,
      gap,
      justifyContent,
      justifyItems,
      wrap,
    };

    const items = React.Children.toArray(children).map((child) => {
      let key = String(child);

      if (React.isValidElement(child)) {
        key = String(child.key);
      }

      return (
        <Animation {...animation} key={key}>
          <ListItem className={`${CLASS_NAME}--list-item`}>{child}</ListItem>
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
  }
);

Navigation.displayName = 'Navigation';

type NavigationProps = Spec.Props;

export { Navigation, type NavigationProps };
