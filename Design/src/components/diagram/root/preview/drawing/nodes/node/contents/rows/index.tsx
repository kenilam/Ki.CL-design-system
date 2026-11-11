import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';
import { TITLE_SIZE } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/constants';

// Partials
import { Row } from './row';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

const Rows: React.FunctionComponent = () => {
  const { rows = [], title, w, x, y } = useNode();
  const cx = x + w / 2;

  return (
    <>
      <text
        className={classNames(
          `${BASE}-title`,
          'kicl-font-size',
          'kicl-font-weight-bolder'
        )}
        textAnchor='middle'
        x={cx}
        y={y + 20}
      >
        {title}
      </text>
      <line
        className={`${BASE}-rule`}
        x1={x}
        x2={x + w}
        y1={y + TITLE_SIZE}
        y2={y + TITLE_SIZE}
      />
      {rows.map(({ name }) => {
        return <Row key={name} name={name} />;
      })}
    </>
  );
};

export { Rows };
