import React from 'react';

// Constants
import { BASE } from 'design/components/diagram/constants';
import { ICON_SIZE } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/constants';

// Spec
import type { Row } from 'design/components/diagram/spec';

// Partials
import { useRow } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/use-row';

type Props = Pick<Row, 'name'>;

const Name: React.FunctionComponent<Props> = ({ name }) => {
  const { baseline, row, x } = useRow(name);

  if (!row) {
    return null;
  }

  return (
    <text
      className={`${BASE}-name`}
      x={x + (row.icon ? 10 + ICON_SIZE + 10 : row.type ? 84 : 10)}
      y={baseline}
    >
      {row.name}
    </text>
  );
};

export { Name };
