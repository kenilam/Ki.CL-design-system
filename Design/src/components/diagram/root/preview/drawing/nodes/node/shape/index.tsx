import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE, CYLINDER_EDGE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

const NodeShape: React.FunctionComponent = () => {
  const { state } = useDiagram();
  const { h, id, shape = 'rect', w, x, y } = useNode();
  const modifier =
    id && state?.failed?.includes(id)
      ? 'failed'
      : id && state?.active?.includes(id)
        ? 'active'
        : undefined;
  const boxClassName = classNames(`${BASE}-box`, {
    [`${BASE}-box--${modifier}`]: modifier,
  });

  if (shape === 'cylinder') {
    const e = CYLINDER_EDGE;

    return (
      <>
        <path
          className={boxClassName}
          d={`M ${x} ${y + e} A ${w / 2} ${e} 0 0 1 ${x + w} ${y + e} V ${y + h - e} A ${w / 2} ${e} 0 0 1 ${x} ${y + h - e} Z`}
        />
        <path
          className={`${BASE}-rule`}
          d={`M ${x} ${y + e} A ${w / 2} ${e} 0 0 0 ${x + w} ${y + e}`}
          fill='none'
        />
      </>
    );
  }

  return (
    <>
      <rect className={boxClassName} height={h} rx={8} width={w} x={x} y={y} />
      {shape === 'queue' ? (
        <>
          <line
            className={`${BASE}-rule`}
            x1={x + 5}
            x2={x + 5}
            y1={y}
            y2={y + h}
          />
          <line
            className={`${BASE}-rule`}
            x1={x + w - 5}
            x2={x + w - 5}
            y1={y}
            y2={y + h}
          />
        </>
      ) : null}
    </>
  );
};

export { NodeShape };
