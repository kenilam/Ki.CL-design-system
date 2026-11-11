import React from 'react';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Spec
import type { Row } from 'design/components/diagram/spec';

// Partials
import { useRow } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/use-row';

type Props = Pick<Row, 'name'>;

const Note: React.FunctionComponent<Props> = ({ name }) => {
  const { baseline, row, w, x } = useRow(name);

  return row?.key || row?.note ? (
    <text
      className={`${BASE}-key`}
      textAnchor='end'
      x={x + w - 10}
      y={baseline}
    >
      {row.key || row.note}
    </text>
  ) : null;
};

export { Note };
