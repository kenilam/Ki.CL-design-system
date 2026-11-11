import React from 'react';

// Spec
import type { Swatch } from 'design/docs/tokens/docs/color/constants';

// Partials
import { Provider } from './context';
import { Root } from './root';

type Props = {
  swatches: Swatch[];
};

const Palette: React.FunctionComponent<Props> = ({ swatches }) => {
  return (
    <Provider swatches={swatches}>
      <Root />
    </Provider>
  );
};

export { Palette };
