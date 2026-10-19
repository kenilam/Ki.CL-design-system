import React from 'react';

import { ALIGNS } from 'design/components/spec';
import type { ColumnSpan, Gap } from 'design/components/spec';

export const ALIGN_ITEMS = [
  ...ALIGNS,
  'baseline',
  'stretch',
  'revert',
] as const;

export type AlignItems = (typeof ALIGN_ITEMS)[number];

export const ALIGN_CONTENTS = [
  ...ALIGN_ITEMS,
  'space-around',
  'space-between',
  'space-evenly',
] as const;

export type AlignContent = (typeof ALIGN_CONTENTS)[number];

export const AUTO_FLOWS = ['row', 'column'] as const;

export type AutoFlow = (typeof AUTO_FLOWS)[number];

export type { ColumnSpan, Gap } from 'design/components/spec';

export const DISPLAYS = ['grid', 'inline-grid', 'flex'] as const;

export type Display = (typeof DISPLAYS)[number];

export type JustifyContent = AlignContent;

export type JustifyItems = AlignItems;

export const FRAMES = [
  'auto--max-content',
  '1fr--max-content',
  'auto--min-content',
  '1fr--min-content',
  'max-content--auto',
  'max-content--1fr',
  'min-content--auto',
  'min-content--1fr',
  'auto--max-content--max-content',
  'auto--max-content--max-content--max-content',
  'max-content--auto--max-content',
  'max-content--max-content--auto',
  'auto--min-content--min-content',
  'min-content--auto--min-content',
  'min-content--min-content--auto',
  'max-content--auto--auto',
  'auto--max-content--auto',
  'auto--auto--max-content',
  'min-content--auto--auto',
  'auto--min-content--auto',
  'auto--auto--min-content',
  '1fr--1fr',
  '1fr--1fr--1fr',
  '1fr--1fr--1fr--1fr',
  '1fr--11fr',
  '2fr--10fr',
  '3fr--9fr',
  '4fr--8fr',
  '5fr--7fr',
  '6fr--6fr',
  '7fr--5fr',
  '8fr--4fr',
  '9fr--3fr',
  '10fr--2fr',
  '11fr--1fr',
  '1fr--1fr--10fr',
  '1fr--2fr--9fr',
  '1fr--3fr--8fr',
  '1fr--4fr--7fr',
  '1fr--5fr--6fr',
  '1fr--6fr--5fr',
  '1fr--7fr--4fr',
  '1fr--8fr--3fr',
  '1fr--9fr--2fr',
  '1fr--10fr--1fr',
  '2fr--1fr--9fr',
  '2fr--2fr--8fr',
  '2fr--3fr--7fr',
  '2fr--4fr--6fr',
  '2fr--5fr--5fr',
  '2fr--6fr--4fr',
  '2fr--7fr--3fr',
  '2fr--8fr--2fr',
  '2fr--9fr--1fr',
  '3fr--1fr--8fr',
  '3fr--2fr--7fr',
  '3fr--3fr--6fr',
  '3fr--4fr--5fr',
  '3fr--5fr--4fr',
  '3fr--6fr--3fr',
  '3fr--7fr--2fr',
  '3fr--8fr--1fr',
  '4fr--1fr--7fr',
  '4fr--2fr--6fr',
  '4fr--3fr--5fr',
  '4fr--4fr--4fr',
  '4fr--5fr--3fr',
  '4fr--6fr--2fr',
  '4fr--7fr--1fr',
  '5fr--1fr--6fr',
  '5fr--2fr--5fr',
  '5fr--3fr--4fr',
  '5fr--4fr--3fr',
  '5fr--5fr--2fr',
  '5fr--6fr--1fr',
  '6fr--1fr--5fr',
  '6fr--2fr--4fr',
  '6fr--3fr--3fr',
  '6fr--4fr--2fr',
  '6fr--5fr--1fr',
  '7fr--1fr--4fr',
  '7fr--2fr--3fr',
  '7fr--3fr--2fr',
  '7fr--4fr--1fr',
  '8fr--1fr--3fr',
  '8fr--2fr--2fr',
  '8fr--3fr--1fr',
  '9fr--1fr--2fr',
  '9fr--2fr--1fr',
  '10fr--1fr--1fr',
  '9fr--1fr--1fr--1fr',
  '8fr--2fr--1fr--1fr',
  '8fr--1fr--2fr--1fr',
  '8fr--1fr--1fr--2fr',
  '7fr--3fr--1fr--1fr',
  '7fr--2fr--2fr--1fr',
  '7fr--1fr--3fr--1fr',
  '7fr--1fr--2fr--2fr',
  '7fr--1fr--1fr--3fr',
  '6fr--4fr--1fr--1fr',
  '6fr--3fr--2fr--1fr',
  '6fr--2fr--3fr--1fr',
  '6fr--1fr--4fr--1fr',
  '6fr--1fr--3fr--2fr',
  '6fr--1fr--2fr--3fr',
  '6fr--1fr--1fr--4fr',
  '5fr--5fr--1fr--1fr',
  '5fr--4fr--2fr--1fr',
  '5fr--3fr--3fr--1fr',
  '5fr--2fr--4fr--1fr',
  '5fr--1fr--5fr--1fr',
  '5fr--1fr--4fr--2fr',
  '5fr--1fr--3fr--3fr',
  '5fr--1fr--2fr--4fr',
  '5fr--1fr--1fr--5fr',
  '4fr--6fr--1fr--1fr',
  '4fr--5fr--2fr--1fr',
  '4fr--4fr--3fr--1fr',
  '4fr--3fr--4fr--1fr',
  '4fr--2fr--5fr--1fr',
  '4fr--1fr--6fr--1fr',
  '4fr--1fr--5fr--2fr',
  '4fr--1fr--4fr--3fr',
  '4fr--1fr--3fr--4fr',
  '4fr--1fr--2fr--5fr',
  '4fr--1fr--1fr--6fr',
  '3fr--3fr--3fr--3fr',
  '3fr--7fr--1fr--1fr',
  '3fr--6fr--2fr--1fr',
  '3fr--5fr--3fr--1fr',
  '3fr--4fr--4fr--1fr',
  '3fr--3fr--5fr--1fr',
  '3fr--2fr--6fr--1fr',
  '3fr--1fr--7fr--1fr',
  '3fr--1fr--6fr--2fr',
  '3fr--1fr--5fr--3fr',
  '3fr--1fr--4fr--4fr',
  '3fr--1fr--3fr--5fr',
  '3fr--1fr--2fr--6fr',
  '3fr--1fr--1fr--7fr',
  '2fr--8fr--1fr--1fr',
  '2fr--7fr--1fr--1fr',
  '2fr--6fr--2fr--1fr',
  '2fr--5fr--3fr--1fr',
  '2fr--4fr--4fr--1fr',
  '2fr--3fr--5fr--1fr',
  '2fr--2fr--6fr--1fr',
  '2fr--1fr--7fr--1fr',
  '2fr--1fr--6fr--2fr',
  '2fr--1fr--5fr--3fr',
  '2fr--1fr--4fr--4fr',
  '2fr--1fr--3fr--5fr',
  '2fr--1fr--2fr--6fr',
  '2fr--1fr--1fr--7fr',
  '1fr--9fr--1fr--1fr',
  '1fr--8fr--2fr--1fr',
  '1fr--7fr--3fr--1fr',
  '1fr--6fr--4fr--1fr',
  '1fr--5fr--5fr--1fr',
  '1fr--4fr--6fr--1fr',
  '1fr--3fr--7fr--1fr',
  '1fr--2fr--8fr--1fr',
  '1fr--1fr--9fr--1fr',
  '1fr--1fr--8fr--2fr',
  '1fr--1fr--7fr--3fr',
  '1fr--1fr--6fr--4fr',
  '1fr--1fr--5fr--5fr',
  '1fr--1fr--4fr--6fr',
  '1fr--1fr--3fr--7fr',
  '1fr--1fr--2fr--8fr',
  '1fr--1fr--1fr--9fr',
] as const;

export type Frames = (typeof FRAMES)[number];

type Shared = Pick<React.HTMLAttributes<HTMLElement>, 'className'> & {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  autoFlow?: AutoFlow;
  display?: Display;
  fullScreen?: boolean;
  gap?: Gap;
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  /** How many columns of a parent `columns` grid this takes, or the whole row. Full width on phones. */
  span?: ColumnSpan | 'full';
  wrap?: boolean;
};

type Tracks =
  | {
      /** A 12-column grid, the same columns as the `--kicl-columns-*` widths. */
      columns?: boolean;
      fill?: never;
      frames?: never;
    }
  | {
      columns?: false;
      /**
       * A grid of as many tracks as fit, each this many of its own 12 columns
       * wide, so `4` is three a row. One a row on phones.
       */
      fill?: ColumnSpan;
      frames?: never;
    }
  | {
      columns?: false;
      fill?: never;
      frames?: Frames;
    };

export type Props = Shared & Tracks;
