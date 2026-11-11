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
import type { LEVELS } from 'design/components';

type Props = { level: (typeof LEVELS)[number] };

const Level: React.FunctionComponent<Props> = ({ level }) => {
  return (
    <Card
      header={
        <CardTitle is='h4'>
          <Text is='code'>{`level='${level}'`}</Text>
        </CardTitle>
      }
      is='li'
      level={level}
    >
      <List alignItems='center' autoFlow='row' display='flex' gap='narrow' wrap>
        <ListItem>
          <Button level={level}>{level}</Button>
        </ListItem>
        <ListItem>
          <Button level={level} variant='secondary'>
            {level}
          </Button>
        </ListItem>
        <Badge is='li' level={level}>
          {level}
        </Badge>
      </List>
    </Card>
  );
};

export { Level };
