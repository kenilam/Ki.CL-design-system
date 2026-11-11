import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Spec
import type { Group as GroupSpec } from 'design/components/diagram/spec';

type Props = Pick<GroupSpec, 'label'>;

const Group: React.FunctionComponent<Props> = ({ label }) => {
  const { spec } = useDiagram();
  const group = spec.groups?.find((item) => {
    return item.label === label;
  });

  if (!group) {
    return null;
  }

  const { h, w, x, y } = group;

  return (
    <>
      <rect
        className={`${BASE}-group`}
        height={h}
        rx={10}
        width={w}
        x={x}
        y={y}
      />
      <text
        className={classNames(
          `${BASE}-group-label`,
          'kicl-text-transform-uppercase'
        )}
        x={x + 14}
        y={y + 22}
      >
        {label}
      </text>
    </>
  );
};

export { Group };
