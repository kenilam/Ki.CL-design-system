import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { ListItem, Text } from 'design/components';

// Spec
import type { COLUMN_SPANS } from 'design/components';

type Props = { span: (typeof COLUMN_SPANS)[number] };

const Column: React.FunctionComponent<Props> = ({ span }) => {
  return (
    <ListItem gap='narrowest' justifyItems='start'>
      <Text is='code'>{`kicl-inline-size-columns-${span}`}</Text>
      <div
        aria-hidden
        className={classNames(
          `kicl-inline-size-columns-${span}`,
          'kicl-background-color-blue',
          'kicl-border-radius-xs',
          'kicl-padding-block-narrower'
        )}
      />
    </ListItem>
  );
};

export { Column };
