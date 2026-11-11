import React from 'react';

// Spec
import type { Row as RowSpec } from 'design/components/diagram/spec';

// Partials
import { Kind } from './kind';
import { Name } from './name';
import { Note } from './note';
import { Rule } from './rule';

type Props = Pick<RowSpec, 'name'>;

const Row: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <>
      <Rule name={name} />
      <Kind name={name} />
      <Name name={name} />
      <Note name={name} />
    </>
  );
};

export { Row };
