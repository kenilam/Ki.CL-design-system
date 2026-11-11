import React from 'react';

// Components
import { Card, CardTitle, List, Text } from 'design/components';

// Spec
import type { Swatch as SwatchSpec } from 'design/docs/tokens/docs/color/constants';

// Context
import { usePalette } from 'design/docs/tokens/docs/color/palette/context';

// Partials
import { Token } from './token';

type Props = Pick<SwatchSpec, 'name'>;

const Swatch: React.FunctionComponent<Props> = ({ name }) => {
  const { swatches } = usePalette();
  const swatch = swatches.find((item) => {
    return item.name === name;
  });

  if (!swatch) {
    return null;
  }

  return (
    <Card
      header={
        <CardTitle is='h4'>
          <Text is='code'>{name}</Text>
        </CardTitle>
      }
      is='li'
    >
      <List gap='narrow' is='ol'>
        {swatch.tokens.map((token) => {
          return <Token key={token} token={token} />;
        })}
      </List>
    </Card>
  );
};

export { Swatch };
