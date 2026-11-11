import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { ListItem, Text } from 'design/components';

type Props = { radius: string };

const Radius: React.FunctionComponent<Props> = ({ radius }) => {
  return (
    <ListItem className='kicl-inline-size-xs' gap='narrower'>
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
};

export { Radius };
