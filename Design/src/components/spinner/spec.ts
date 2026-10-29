import React from 'react';

import { AnimationProps } from 'design/components';
import type { Props as ButtonProps } from 'design/components/button/spec';

type Overlay = {
  position?: 'overlay';
  atRoot?: boolean;
  backdrop?: boolean;
};

type Inline = {
  position: 'inline';
  atRoot?: never;
  backdrop?: never;
};

export type Props = Pick<React.HTMLAttributes<HTMLSpanElement>, 'className'> &
  Pick<ButtonProps, 'size'> &
  AnimationProps & {
    /** Only for assistive tech; it isn't shown. */
    label?: string;
  } & (Overlay | Inline);
