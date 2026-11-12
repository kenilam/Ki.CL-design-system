// Libraries
import classNames from 'classnames';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Context
import { useSegmented } from 'design/components/segmented/context';

const CLASS_NAME = 'kicl--components--segmented';

const useClassName = (className: SegmentedProps['className']) => {
  const { block, hasLegend, isPanel } = useSegmented();

  return classNames(
    CLASS_NAME,
    hasLegend ? `${CLASS_NAME}--with-legend` : null,
    isPanel ? `${CLASS_NAME}--popover` : null,
    block ? 'kicl-border-radius-sm' : 'kicl-border-radius-md',
    !hasLegend && !isPanel ? 'kicl-padding-block-narrowest' : null,
    !hasLegend && !isPanel ? 'kicl-padding-inline-narrowest' : null,
    'kicl-position-relative',
    className
  );
};

export { useClassName };
