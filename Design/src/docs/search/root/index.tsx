import React from 'react';

// Components
import { Combobox } from 'design/components';

// Partials
import { useSearchContext } from 'design/docs/search/context';
import { Field } from './field';
import { Results } from './results';

const Root: React.FunctionComponent<
  Pick<React.ComponentProps<'div'>, 'className'>
> = ({ className }) => {
  const { query } = useSearchContext();

  return (
    <search className={className}>
      <Combobox open={query.trim() ? undefined : false}>
        <Field />
        <Results />
      </Combobox>
    </search>
  );
};

export { Root };
