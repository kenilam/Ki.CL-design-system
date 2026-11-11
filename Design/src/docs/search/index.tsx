import React from 'react';

// Partials
import { Provider } from './context';
import { Root } from './root';

const Search: React.FunctionComponent<
  Pick<React.ComponentProps<'div'>, 'className'>
> = ({ className }) => {
  return (
    <Provider>
      <Root className={className} />
    </Provider>
  );
};

export { Search };
