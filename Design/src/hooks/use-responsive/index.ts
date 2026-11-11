// Partials
import {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
} from './theme';
import { useBreakpoints } from './use-breakpoints';
import { useOrientation } from './use-orientation';
import { useTheme } from './use-theme';

const useResponsive = () => {
  const theme = useTheme();
  const orientation = useOrientation();
  const viewport = useBreakpoints();

  return { ...viewport, ...orientation, ...theme };
};

export {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
  useResponsive,
};
