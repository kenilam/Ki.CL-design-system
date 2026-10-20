import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Card, CardTitle, List, Text } from 'design/components';

type Props = {
  names: string[];
};

const Palette: React.FunctionComponent<Props> = ({ names }) => (
  <List autoFlow='row' display='flex' gap='normal' wrap>
    {names.map((name) => (
      <Card
        header={
          <CardTitle is='h4'>
            <Text is='code'>{name}</Text>
          </CardTitle>
        }
        is='li'
        key={name}
        size='md'
      >
        <div
          aria-hidden
          className={classNames(
            `kicl-background-color-${name}`,
            'kicl-aspect-ratio-video',
            'kicl-border-radius-sm',
            'kicl-box-shadow-overlay'
          )}
        />
      </Card>
    ))}
  </List>
);

export { Palette };
