import React from 'react';

// Constants
import { BASE, CYLINDER_EDGE } from 'design/components/diagram/constants';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';
import { useBoxClassName } from './use-box-class-name';

// Styles
import './styles.scss';

const NodeShape: React.FunctionComponent = () => {
  const { h, shape = 'rect', w, x, y } = useNode();
  const boxClassName = useBoxClassName();

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
