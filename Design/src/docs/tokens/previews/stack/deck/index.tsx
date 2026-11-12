import React from 'react';

// Constants
import { APEX, NADIR } from 'design/docs/tokens/previews/stack/constants';

// Context
import { useVariables } from 'design/docs/tokens/variables/context';

// Partials
import { Plate } from './plate';

type Props = {
  name: string;
};

const Deck: React.FunctionComponent<Props> = ({ name }) => {
  const { names } = useVariables();
  const layers = names.filter((layer) => layer !== APEX && layer !== NADIR);
  const step = 100 / (layers.length + 3);

  return (
    <>
      {layers
        .map((layer, index) => {
          const inset = `${index * step}% ${(layers.length - 1 - index) * step}%`;

          return <Plate key={layer} inset={inset} layer={layer} name={name} />;
        })
        .toReversed()}
    </>
  );
};

export { Deck };
