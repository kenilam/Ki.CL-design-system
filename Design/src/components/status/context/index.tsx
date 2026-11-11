import React, { createContext, useContext } from 'react';

// Spec
import type * as Spec from 'design/components/status/spec';

type Status = Required<Pick<Spec.Props, 'headingLevel' | 'justifyContent'>> &
  Pick<Spec.Props, 'level' | 'message' | 'title'> & {
    hasTitle: boolean;
  };

const StatusContext = createContext<Status | null>(null);

type Props = React.PropsWithChildren<
  Pick<
    Spec.Props,
    'headingLevel' | 'justifyContent' | 'level' | 'message' | 'title'
  >
>;

const Provider: React.FunctionComponent<Props> = ({
  children,
  headingLevel = 'h4',
  justifyContent = 'start',
  level,
  message,
  title,
}) => {
  return (
    <StatusContext.Provider
      value={{
        hasTitle: Boolean(title) || !message,
        headingLevel,
        justifyContent,
        level,
        message,
        title,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

const useStatus = () => {
  const status = useContext(StatusContext);

  if (!status) {
    throw new Error('useStatus needs a Status around it.');
  }

  return status;
};

export { Provider, useStatus };
