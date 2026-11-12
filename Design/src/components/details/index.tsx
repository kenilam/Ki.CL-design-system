import React from 'react';

// Spec
import type { Props } from './spec';

// Styles
import './styles.scss';
import './styles.motion.scss';
import './styles.print.scss';

// Partials
import { Provider } from './context';
import { Marker } from './marker';
import { Root } from './root';

const Details = React.forwardRef<HTMLDetailsElement, Props>((props, ref) => {
  return (
    <Provider>
      <Root {...props} ref={ref} />
    </Provider>
  );
});

Details.displayName = 'Details';

export type { Props as DetailsProps } from './spec';
export { Details, Marker as DetailsMarker };
