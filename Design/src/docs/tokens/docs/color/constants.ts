// Spec
import { LEVELS } from 'design/components/spec';

export type Swatch = { name: string; tokens: string[] };

// The same steps as `$steps` and `$level-steps` in core/styles/_color.scss.
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
const LOOKS = ['ghost', 'secondary', 'tertiary', 'ink'] as const;

const scale = (name: string): Swatch => ({
  name,
  tokens: STEPS.map((step) => `${name}-${step}`),
});

const NEUTRALS = ['black', 'grey', 'white'].map(scale);
const HUES = ['blue', 'green', 'orange', 'red', 'yellow'].map(scale);
const PURE: Swatch[] = [{ name: 'pure', tokens: ['black-pure', 'white-pure'] }];

// In step order, the level's own colour first.
const LEVEL_SWATCHES = LEVELS.map((level): Swatch => ({
  name: level,
  tokens: [level, ...LOOKS.map((look) => `${level}-${look}`)],
}));

const ALL = [
  ...[...NEUTRALS, ...HUES].flatMap(({ name, tokens }) => [name, ...tokens]),
  ...PURE.flatMap(({ tokens }) => tokens),
  ...LEVEL_SWATCHES.flatMap(({ tokens }) => tokens),
];

export { ALL, HUES, LEVEL_SWATCHES, NEUTRALS, PURE };
