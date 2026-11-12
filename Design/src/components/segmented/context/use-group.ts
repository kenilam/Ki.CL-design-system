import { useId } from 'react';

// Hooks
import { useResponsive } from 'design/hooks';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Partials
import { legendOf } from 'design/components/segmented/children';

type Props = Pick<
  SegmentedProps,
  | 'aria-label'
  | 'block'
  | 'collapse'
  | 'collapsed'
  | 'disabled'
  | 'placement'
  | 'variant'
>;

const useGroup = (props: Props, options: SegmentedProps['children']) => {
  const id = useId();
  const { isNarrow } = useResponsive();
  const isPopover = props.collapse === 'popover';

  return {
    ...props,
    children: options,
    hasLegend: legendOf(options).legend !== null,
    id,
    isPanel: isPopover && (Boolean(props.collapsed) || isNarrow),
    isPopover,
    legendId: `${id}__legend`,
  };
};

export { useGroup };
