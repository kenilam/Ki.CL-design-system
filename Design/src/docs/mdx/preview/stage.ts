import { createContext, useContext } from 'react';

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

const useStage = () => {
  return useContext(StageContext);
};

export { StageContext, useStage };
