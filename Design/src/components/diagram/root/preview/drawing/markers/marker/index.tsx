import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Spec
import type { Accent } from 'design/components/diagram/spec';

type Props = { accent?: Accent };

const Marker: React.FunctionComponent<Props> = ({ accent }) => {
  const { arrow: id } = useDiagram();

  return (
    <marker
      id={accent ? `${id}-arrow-${accent}` : `${id}-arrow`}
      markerHeight={8}
      markerWidth={10}
      orient='auto-start-reverse'
      refX={8}
      refY={4}
    >
      <path
        className={classNames(`${BASE}-arrow`, {
          [`${BASE}-arrow--${accent}`]: accent,
        })}
        d='M 0 0 L 9 4 L 0 8 Z'
      />
    </marker>
  );
};

export { Marker };
