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

// Hooks
import { useResponsive } from 'design/hooks';

// Spec
import { LEVELS } from 'design/components/spec';

const Levels: React.FunctionComponent = () => {
  const { isMobile } = useResponsive();

  return (
    <List fill={isMobile ? 12 : 6} gap='normal'>
      {LEVELS.map((level) => {
        return (
          <Card
            header={
              <CardTitle is='h4'>
                <Text is='code'>{`level='${level}'`}</Text>
              </CardTitle>
            }
            is='li'
            key={level}
            level={level}
          >
            <List
              alignItems='center'
              autoFlow='row'
              display='flex'
              gap='narrow'
              wrap
            >
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
      })}
    </List>
  );
};

export { Levels };
