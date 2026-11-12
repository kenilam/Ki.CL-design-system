// Partials
import {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
} from './theme';
import { useBreakpoints } from './use-breakpoints';
import { useMotion } from './use-motion';
import { useOrientation } from './use-orientation';
import { useTheme } from './use-theme';

const useResponsive = () => {
  const theme = useTheme();
  const orientation = useOrientation();
  const motion = useMotion();
  const viewport = useBreakpoints();

  return { ...viewport, ...orientation, ...motion, ...theme };
};

export {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
  useResponsive,
};
