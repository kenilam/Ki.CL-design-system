// Libraries
import type { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { useClipboard } from './use-clipboard';
import { useClosedBy } from './use-closed-by';
import { useNow } from './use-now';
import { useOverlayContents } from './use-overlay-contents';
import { usePrinting } from './use-printing';
import { useResizeObserver } from './use-resize-observer';
import {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
  useResponsive,
} from './use-responsive';

export {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type TFunction,
  type Theme,
  useClipboard,
  useClosedBy,
  useNow,
  useOverlayContents,
  usePrinting,
  useResizeObserver,
  useResponsive,
  useTranslation,
};
