import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { endsOf } from 'design/components/diagram/root/preview/drawing/edges/ends-of';
import { roundedPath } from './rounded-path';

type Props = { ends: string };

const Edge: React.FunctionComponent<Props> = ({ ends }) => {
  const { arrow: id, spec } = useDiagram();
  const edge = spec.edges.find((item) => {
    return endsOf(item) === ends;
  });

  if (!edge) {
    return null;
  }

  const marker = edge.accent ? `${id}-arrow-${edge.accent}` : `${id}-arrow`;

  return (
    <>
      <path
        className={classNames(`${BASE}-edge`, {
          [`${BASE}-edge--${edge.accent}`]: edge.accent,
          [`${BASE}-edge--dashed`]: edge.dashed,
        })}
        d={roundedPath(edge.points)}
        markerEnd={`url(#${marker})`}
        markerStart={edge.both ? `url(#${marker})` : undefined}
      />
      {edge.label ? (
        <text
          className={`${BASE}-edge-label`}
          textAnchor={edge.anchor || 'middle'}
          x={edge.lx}
          y={edge.ly}
        >
          {edge.label}
        </text>
      ) : null}
    </>
  );
};

export { Edge };
