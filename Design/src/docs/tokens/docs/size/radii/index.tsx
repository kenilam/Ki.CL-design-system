import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { List, ListItem, Text } from 'design/components';

const RADII = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'max', 'full'];

const Radii: React.FunctionComponent = () => {
  return (
    <List autoFlow='row' display='flex' gap='normal' wrap>
      {RADII.map((radius) => {
        return (
          <ListItem className='kicl-inline-size-xs' gap='narrower' key={radius}>
            <div
              aria-hidden
              className={classNames(
                `kicl-border-radius-${radius}`,
                'kicl-aspect-ratio-square',
                'kicl-background-color-grey'
              )}
            />
            <Text is='code'>{radius}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Radii };
