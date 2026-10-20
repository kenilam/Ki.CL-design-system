import React from 'react';

// Components
import {
  Badge,
  Button,
  Card,
  CardTitle,
  Layout,
  List,
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
      {LEVELS.map((level) => (
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
          <Layout
            alignItems='center'
            autoFlow='row'
            display='flex'
            gap='narrow'
            wrap
          >
            <div>
              <Button level={level}>{level}</Button>
              <Button level={level} variant='secondary'>
                {level}
              </Button>
              <Badge level={level}>{level}</Badge>
            </div>
          </Layout>
        </Card>
      ))}
    </List>
  );
};

export { Levels };
