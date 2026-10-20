import React, { createContext, PropsWithChildren, useContext } from 'react';

// Routes
import { useLocation, useParams } from 'design/router';

const BaseContext = createContext('');

const Provider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const { '*': rest = '' } = useParams();

  const base = pathname
    .slice(0, pathname.length - rest.length)
    .replace(/\/$/, '');

  return <BaseContext.Provider value={base}>{children}</BaseContext.Provider>;
};

const useDocsContext = () => {
  const base = useContext(BaseContext);

  return {
    parsePath(path = '') {
      return `${base}/${path}`;
    },
  };
};

export { BaseContext, Provider, useDocsContext };
