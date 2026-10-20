import React from 'react';

// Components
import { List, ListItem, Text } from 'design/components';

type Props = {
  property: 'font-family' | 'font-size' | 'font-weight';
  names: string[];
};

const TypeScale: React.FunctionComponent<Props> = ({ names, property }) => (
  <List gap='narrow'>
    {names.map((name) => {
      const className = name ? `kicl-${property}-${name}` : `kicl-${property}`;

      return (
        <ListItem key={name}>
          <Text className={className} is='span'>
            {className}
          </Text>
        </ListItem>
      );
    })}
  </List>
);

export { TypeScale };
