import { themes } from 'prism-react-renderer';

const THEMES = {
  dark: {
    ...themes.vsDark,
    styles: [
      ...themes.vsDark.styles,
      { types: ['atrule', 'rule'], style: { color: 'rgb(197, 134, 192)' } },
    ],
  },
  light: {
    ...themes.vsLight,
    styles: [
      ...themes.vsLight.styles,
      { types: ['selector'], style: { color: 'rgb(128, 0, 0)' } },
      { types: ['property'], style: { color: 'rgb(196, 0, 0)' } },
      { types: ['atrule', 'rule'], style: { color: 'rgb(150, 0, 190)' } },
    ],
  },
};

export { THEMES };
