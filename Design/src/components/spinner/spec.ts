import React from 'react';

import { AnimationProps } from 'design/components';
import type { Props as ButtonProps } from 'design/components/button/spec';

/** Over its parent, with a veil between them, or at the root over the whole page. */
type Overlay = {
  position?: 'overlay';
  atRoot?: boolean;
  backdrop?: boolean;
};

/** In the line, beside text or in a button. It covers nothing, so it veils nothing. */
type Inline = {
  position: 'inline';
  atRoot?: never;
  backdrop?: never;
};

/** The icon is `1em`; `size` changes only its font size, as on `Button`. */
export type Props = Pick<React.HTMLAttributes<HTMLSpanElement>, 'className'> &
  Pick<ButtonProps, 'size'> &
  AnimationProps & {
    /** Read out by assistive tech while the spinner shows. */
    label?: string;
  } & (Overlay | Inline);
