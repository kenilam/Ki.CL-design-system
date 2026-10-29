import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Button,
  Card,
  CardDescription,
  CardTitle,
  List,
  ListItem,
  Text,
} from 'design/components';

// Hooks
import { DARK_THEME_CLASS_NAME, useResponsive } from 'design/hooks';

// Spec
import { VARIANTS } from 'design/components/spec';

const THEMES = ['kicl--theme--light', DARK_THEME_CLASS_NAME];

const Themes: React.FunctionComponent = () => {
  const { isMobile } = useResponsive();

  return (
    <List fill={isMobile ? 12 : 6} gap='normal'>
      {THEMES.map((theme) => {
        return (
          <ListItem
            className={classNames(
              theme,
              'kicl-background-color-body',
              'kicl-border-radius-md',
              'kicl-padding'
            )}
            key={theme}
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
                  return (
                    <ListItem key={variant}>
                      <Button size='small' variant={variant}>
                        {variant}
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Themes };
