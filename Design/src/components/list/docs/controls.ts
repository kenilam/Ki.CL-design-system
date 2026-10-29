import type { List } from 'design/components';
import type { Controlled, ControlsSpec } from 'design/docs/mdx/preview';
import {
  ALIGN_CONTENTS,
  ALIGN_ITEMS,
  AUTO_FLOWS,
  DISPLAYS,
} from 'design/components/layout/spec';
import { LIST_IS } from 'design/components/list/spec';
import { COLUMN_SPANS, GAPS } from 'design/components/spec';

export const CONTROLS = {
  is: { options: LIST_IS, default: 'ul' },
  listStyleType: [
    'disc',
    'circle',
    'square',
    'disclosure-open',
    'disclosure-closed',
    'decimal',
    'decimal-leading-zero',
    'lower-roman',
    'upper-roman',
    'lower-alpha',
    'upper-alpha',
    'lower-latin',
    'upper-latin',
    'lower-greek',
    'arabic-indic',
    'armenian',
    'lower-armenian',
    'upper-armenian',
    'bengali',
    'cambodian',
    'khmer',
    'cjk-decimal',
    'cjk-earthly-branch',
    'cjk-heavenly-stem',
    'cjk-ideographic',
    'devanagari',
    'ethiopic-numeric',
    'georgian',
    'gujarati',
    'gurmukhi',
    'hebrew',
    'hiragana',
    'hiragana-iroha',
    'japanese-formal',
    'japanese-informal',
    'kannada',
    'katakana',
    'katakana-iroha',
    'korean-hangul-formal',
    'korean-hanja-formal',
    'korean-hanja-informal',
    'lao',
    'malayalam',
    'mongolian',
    'myanmar',
    'oriya',
    'persian',
    'simp-chinese-formal',
    'simp-chinese-informal',
    'tamil',
    'telugu',
    'thai',
    'tibetan',
    'trad-chinese-formal',
    'trad-chinese-informal',
  ],
  display: { options: DISPLAYS, default: 'grid' },
  autoFlow: { options: AUTO_FLOWS, default: 'row' },
  gap: {
    options: GAPS,
    default: 'normal',
  },
  alignItems: { options: ALIGN_ITEMS, default: 'stretch' },
  alignContent: { options: ALIGN_CONTENTS, default: 'stretch' },
  justifyItems: { options: ALIGN_ITEMS, default: 'stretch' },
  justifyContent: { options: ALIGN_CONTENTS, default: 'stretch' },
  wrap: 'boolean',
} satisfies ControlsSpec;

export const FLEX_CONTROLS = {
  justifyContent: { options: ALIGN_CONTENTS, default: 'start' },
} satisfies ControlsSpec;

export const GRID_CONTROLS = {
  fill: COLUMN_SPANS,
} satisfies ControlsSpec;

export type Props = Controlled<typeof List, keyof typeof CONTROLS>;

export type GridProps = Controlled<
  typeof List,
  Exclude<keyof typeof CONTROLS, 'is'> | keyof typeof GRID_CONTROLS
>;
