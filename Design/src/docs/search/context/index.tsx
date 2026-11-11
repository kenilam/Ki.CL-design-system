import React, { createContext, useContext } from 'react';

// Partials
import { useSearch } from './use-search';

const SearchContext = createContext<ReturnType<typeof useSearch> | null>(null);

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const search = useSearch();

  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const search = useContext(SearchContext);

  if (!search) {
    throw new Error('useSearchContext needs a Search around it.');
  }

  return search;
};

export { Provider, useSearchContext };
