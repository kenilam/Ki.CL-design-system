import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Spec
import type { Row } from 'design/components/diagram/spec';

// Partials
import { useRow } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/rows/row/use-row';

// Styles
import './styles.scss';

type Props = Pick<Row, 'name'>;

const Rule: React.FunctionComponent<Props> = ({ name }) => {
  const { index, top, w, x } = useRow(name);

  if (index < 1) {
    return null;
  }

  return (
    <line
      className={classNames(`${BASE}-rule`, `${BASE}-rule--faint`)}
      x1={x}
      x2={x + w}
      y1={top}
      y2={top}
    />
  );
};

export { Rule };
