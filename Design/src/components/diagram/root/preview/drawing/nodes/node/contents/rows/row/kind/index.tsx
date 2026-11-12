import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';
import { ICON_SIZE } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/constants';

// Spec
import type { Row } from 'design/components/diagram/spec';

// Partials
import { useRow } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/use-row';

// Styles
import './styles.scss';

type Props = Pick<Row, 'name'>;

const Kind: React.FunctionComponent<Props> = ({ name }) => {
  const { baseline, row, x } = useRow(name);
  const Icon = row?.icon;

  if (Icon) {
    return (
      <Icon
        className={`${BASE}-icon`}
        size={ICON_SIZE}
        x={x + 10}
        y={baseline - ICON_SIZE + 3}
      />
    );
  }

  return row?.type ? (
    <text
      className={classNames(`${BASE}-type`, 'kicl-font-family-mono')}
      x={x + 10}
      y={baseline}
    >
      {row.type}
    </text>
  ) : null;
};

export { Kind };
