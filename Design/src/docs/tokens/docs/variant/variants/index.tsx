import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Spec
import { VARIANTS } from 'design/components';

// Partials
import { Variant } from './variant';

const Variants: React.FunctionComponent = () => {
  const { isNarrow } = useResponsive();

  return (
    <List fill={isNarrow ? 12 : 6} gap='normal'>
      {VARIANTS.map((variant) => {
        return <Variant key={variant} variant={variant} />;
      })}
    </List>
  );
};

export { Variants };
