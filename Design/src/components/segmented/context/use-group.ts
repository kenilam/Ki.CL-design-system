import { useId } from 'react';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Partials
import { legendOf } from 'design/components/segmented/children';

type Props = Pick<
  SegmentedProps,
  'aria-label' | 'block' | 'collapse' | 'disabled' | 'placement' | 'variant'
>;

const useGroup = (props: Props, options: SegmentedProps['children']) => {
  const id = useId();

  return {
    ...props,
    children: options,
    hasLegend: legendOf(options).legend !== null,
    id,
    isPopover: props.collapse === 'popover',
    legendId: `${id}__legend`,
  };
};

export { useGroup };
