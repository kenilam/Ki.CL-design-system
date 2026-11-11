import React from 'react';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Group } from './group';

const Groups: React.FunctionComponent = () => {
  const {
    spec: { groups },
  } = useDiagram();

  return (
    <>
      {groups?.map(({ label }) => {
        return <Group key={label} label={label} />;
      })}
    </>
  );
};

export { Groups };
