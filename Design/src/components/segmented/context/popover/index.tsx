import React from 'react';

// Components
import { Popover as Base } from 'design/components/popover';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

type Props = React.PropsWithChildren<Pick<SegmentedProps, 'collapse'>>;

const Popover: React.FunctionComponent<Props> = ({ children, collapse }) => {
  return collapse === 'popover' ? <Base>{children}</Base> : children;
};

export { Popover };
