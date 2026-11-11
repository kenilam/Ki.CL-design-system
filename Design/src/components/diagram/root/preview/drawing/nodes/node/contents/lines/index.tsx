import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

// Partials
import { Line } from './line';
import { titleYOf } from './title-y';

const Lines: React.FunctionComponent = () => {
  const node = useNode();

  return (
    <>
      <text
        className={classNames(
          `${BASE}-title`,
          'kicl-font-size',
          'kicl-font-weight-bolder'
        )}
        textAnchor='middle'
        x={node.x + node.w / 2}
        y={titleYOf(node)}
      >
        {node.title}
      </text>
      {node.lines?.map((line) => {
        return <Line key={line} line={line} />;
      })}
    </>
  );
};

export { Lines };
