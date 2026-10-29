// Spec
import { LEVELS } from 'design/components/spec';

export type Swatch = { name: string; tokens: string[] };

// The same steps as `$steps` and `$level-steps` in core/styles/_color.scss.
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const LOOKS = ['ghost', 'secondary', 'tertiary', 'ink'] as const;

const scale = (name: string): Swatch => {
  return {
    name,
    tokens: STEPS.map((step) => {
      return `${name}-${step}`;
    }),
  };
};

const NEUTRALS = ['black', 'grey', 'white'].map(scale);
const HUES = ['blue', 'green', 'orange', 'red', 'yellow'].map(scale);
const PURE: Swatch[] = [{ name: 'pure', tokens: ['black-pure', 'white-pure'] }];

const LEVEL_SWATCHES = LEVELS.map((level): Swatch => {
  return {
    name: level,
    tokens: [
      level,
      ...LOOKS.map((look) => {
        return `${level}-${look}`;
      }),
    ],
  };
});

const ALL = [
  ...[...NEUTRALS, ...HUES].flatMap(({ name, tokens }) => {
    return [name, ...tokens];
  }),
  ...PURE.flatMap(({ tokens }) => {
    return tokens;
  }),
  ...LEVEL_SWATCHES.flatMap(({ tokens }) => {
    return tokens;
  }),
];

export { ALL, HUES, LEVEL_SWATCHES, NEUTRALS, PURE };
