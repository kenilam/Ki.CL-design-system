// Icons
import * as Tb from 'react-icons/tb';

const CLASS_NAME = 'kicl--components--color-picker';

const START = '#808080';

// OKLCH channels. Chroma stops at 0.37, about the most any sRGB color has.
const CHANNELS = {
  l: { icon: Tb.TbSun, label: 'color_picker_lightness', max: 1, step: 0.001 },
  c: {
    icon: Tb.TbDroplet,
    label: 'color_picker_chroma',
    max: 0.37,
    step: 0.001,
  },
  h: { icon: Tb.TbPalette, label: 'color_picker_hue', max: 360, step: 1 },
} as const;

export { CHANNELS, CLASS_NAME, START };
