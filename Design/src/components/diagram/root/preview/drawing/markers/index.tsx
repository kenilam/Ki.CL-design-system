import React from 'react';

// Partials
import { Marker } from './marker';

// Constants
import { ACCENTS } from './constants';

const Markers: React.FunctionComponent = () => {
  return (
    <defs>
      <Marker />
      {ACCENTS.map((accent) => {
        return <Marker accent={accent} key={accent} />;
      })}
    </defs>
  );
};

export { Markers };
