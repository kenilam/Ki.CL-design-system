import React from 'react';

// Components
import { Button, ListItem } from 'design/components';

// Spec
import type { VARIANTS } from 'design/components';

type Props = { variant: (typeof VARIANTS)[number] };

const Variant: React.FunctionComponent<Props> = ({ variant }) => {
  return (
    <ListItem>
      <Button size='small' variant={variant}>
        {variant}
      </Button>
    </ListItem>
  );
};

export { Variant };
