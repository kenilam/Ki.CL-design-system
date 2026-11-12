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

  let offset = 10;

  if (row.type) {
    offset = 84;
  }

  if (row.icon) {
    offset = 10 + ICON_SIZE + 10;
  }

  return (
    <text className={`${BASE}-name`} x={x + offset} y={baseline}>
      {row.name}
    </text>
  );
};

export { Name };
