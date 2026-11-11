import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Card,
  CardDescription,
  CardTitle,
  List,
  ListItem,
  Text,
} from 'design/components';

// Spec
import { VARIANTS } from 'design/components';

// Partials
import { Variant } from './variant';

type Props = { theme: string };

const Theme: React.FunctionComponent<Props> = ({ theme }) => {
  return (
    <ListItem
      className={classNames(
        theme,
        'kicl-background-color-body',
        'kicl-border-radius-md',
        'kicl-padding'
      )}
    >
      <Card
        is='section'
        header={
          <>
            <CardTitle is='h4'>
              <Text is='code'>{theme}</Text>
            </CardTitle>
            <CardDescription>
              <Text is='code'>--kicl-surface-color</Text>
            </CardDescription>
          </>
        }
      >
        <List
          alignItems='center'
          autoFlow='row'
          display='flex'
          gap='narrow'
          wrap
        >
          {VARIANTS.map((variant) => {
            return <Variant key={variant} variant={variant} />;
          })}
        </List>
      </Card>
    </ListItem>
  );
};

export { Theme };
