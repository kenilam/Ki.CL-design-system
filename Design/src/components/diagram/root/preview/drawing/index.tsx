import React from 'react';

// Libraries
import classNames from 'classnames';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Edges } from './edges';
import { Groups } from './groups';
import { Markers } from './markers';
import { Nodes } from './nodes';

const Drawing: React.FunctionComponent = () => {
  const {
    spec: { description, height, width },
  } = useDiagram();

  return (
    <svg
      aria-hidden
      className={classNames('kicl-display-block', 'kicl-inline-size-full')}
      style={{ minInlineSize: width }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <title>{description}</title>
      <Markers />
      <Groups />
      <Edges />
      <Nodes />
    </svg>
  );
};

export { Drawing };
