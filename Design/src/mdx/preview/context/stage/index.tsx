import React, { createContext, useContext, useState } from 'react';

/**
 * `dark` stays `undefined`, and the stage follows the site, until a preset's
 * theme switch sets it.
 */
type Stage = {
  dark: boolean | undefined;
  setDark: (dark: boolean) => void;
};

const StageContext = createContext<Stage>({
  dark: undefined,
  setDark: () => {},
});

const Provider: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>();

  return (
    <StageContext.Provider value={{ dark, setDark }}>
      {children}
    </StageContext.Provider>
  );
};

const useStage = () => {
  return useContext(StageContext);
};

export { Provider, useStage };
