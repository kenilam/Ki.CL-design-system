import React from 'react';

// Components
import { List } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { usePalette } from 'design/docs/tokens/docs/color/palette/context';

// Partials
import { Swatch } from './swatch';

const Root: React.FunctionComponent = () => {
  const { isNarrow, isNormal } = useResponsive();
  const { probe, swatches } = usePalette();

  return (
    <>
      <span aria-hidden className='kicl-hidden' ref={probe} />
      <List
        alignItems='start'
        fill={isNarrow ? 12 : isNormal ? 6 : 3}
        gap='normal'
      >
        {swatches.map(({ name }) => {
          return <Swatch key={name} name={name} />;
        })}
      </List>
    </>
  );
};

export { Root };
