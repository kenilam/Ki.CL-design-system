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
import { VARIANTS } from 'design/components/spec';

const Variants: React.FunctionComponent = () => {
  const { isMobile } = useResponsive();

  return (
    <List fill={isMobile ? 12 : 6} gap='normal'>
      {VARIANTS.map((variant) => (
        <Card
          header={
            <CardTitle is='h4'>
              <Text is='code'>{`variant='${variant}'`}</Text>
            </CardTitle>
          }
          is='li'
          key={variant}
        >
          <List
            alignItems='center'
            autoFlow='row'
            display='flex'
            gap='narrow'
            wrap
          >
            <ListItem>
              <Button variant={variant}>{variant}</Button>
            </ListItem>
            {variant !== 'tertiary' && (
              <Badge is='li' variant={variant}>
                {variant}
              </Badge>
            )}
          </List>
        </Card>
      ))}
    </List>
  );
};

export { Variants };
