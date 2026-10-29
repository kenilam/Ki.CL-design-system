import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { List, ListItem, Text } from 'design/components';

// Spec
import { COLUMN_SPANS } from 'design/components/spec';

const Columns: React.FunctionComponent = () => {
  return (
    <List gap='narrow'>
      {COLUMN_SPANS.map((span) => {
        return (
          <ListItem gap='narrowest' justifyItems='start' key={span}>
            <Text is='code'>{`kicl-inline-size-columns-${span}`}</Text>
            <div
              aria-hidden
              className={classNames(
                `kicl-inline-size-columns-${span}`,
                'kicl-background-color-blue',
                'kicl-border-radius-xs',
                'kicl-padding-block-narrower'
              )}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export { Columns };
