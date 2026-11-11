import React from 'react';

// Components
import {
  Badge,
  Button,
  Card,
  CardTitle,
  List,
  ListItem,
  Text,
} from 'design/components';

// Spec
import type { VARIANTS } from 'design/components';

type Props = { variant: (typeof VARIANTS)[number] };

const Variant: React.FunctionComponent<Props> = ({ variant }) => {
  return (
    <Card
      header={
        <CardTitle is='h4'>
          <Text is='code'>{`variant='${variant}'`}</Text>
        </CardTitle>
      }
      is='li'
    >
      <List alignItems='center' autoFlow='row' display='flex' gap='narrow' wrap>
        <ListItem>
          <Button variant={variant}>{variant}</Button>
        </ListItem>
        {variant !== 'tertiary' ? (
          <Badge is='li' variant={variant}>
            {variant}
          </Badge>
        ) : null}
      </List>
    </Card>
  );
};

export { Variant };
