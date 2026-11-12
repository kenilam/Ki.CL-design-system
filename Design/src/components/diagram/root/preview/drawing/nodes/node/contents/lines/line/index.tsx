import React from 'react';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';
import {
  LINE_SIZE,
  titleYOf,
} from 'design/components/diagram/root/preview/drawing/nodes/node/contents/lines/title-y';

// Styles
import './styles.scss';

const LINE_START = 18;

type Props = { line: string };

const Line: React.FunctionComponent<Props> = ({ line }) => {
  const shown = useNode();
  const index = shown.lines?.indexOf(line) ?? -1;

  if (index < 0) {
    return null;
  }

  return (
    <text
      className={`${BASE}-line`}
      textAnchor='middle'
      x={shown.x + shown.w / 2}
      y={titleYOf(shown) + LINE_START + index * LINE_SIZE}
    >
      {line}
    </text>
  );
};

export { Line };
