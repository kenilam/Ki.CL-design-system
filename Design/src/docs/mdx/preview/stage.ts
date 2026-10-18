import { createContext, useContext } from 'react';

/**
 * What a preset may do to the stage it is on. A theme switch in a preset
 * gives the stage a theme of its own, so the reader sees the switch do
 * something. Until then `dark` is unset and the stage follows the site.
 */
type Stage = {
  dark: boolean | undefined;
  setDark: (dark: boolean) => void;
};

const StageContext = createContext<Stage>({
  dark: undefined,
  setDark: () => {},
});

const useStage = () => useContext(StageContext);

export { StageContext, useStage };
