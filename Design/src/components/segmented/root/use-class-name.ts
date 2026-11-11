// Libraries
import classNames from 'classnames';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Context
import { useSegmented } from 'design/components/segmented/context';

const CLASS_NAME = 'kicl--components--segmented';

const useClassName = ({
  className,
  collapsed,
}: Pick<SegmentedProps, 'className' | 'collapsed'>) => {
  const { block, collapse, hasLegend, isPopover } = useSegmented();

  return classNames(
    CLASS_NAME,
    collapse ? `${CLASS_NAME}--collapse--${collapse}` : null,
    collapsed ? `${CLASS_NAME}--collapsed` : null,
    hasLegend ? `${CLASS_NAME}--with-legend` : null,
    isPopover ? `${CLASS_NAME}__popover` : null,
    isPopover && collapsed ? `${CLASS_NAME}__popover--collapsed` : null,
    block ? 'kicl-border-radius-sm' : 'kicl-border-radius-md',
    !hasLegend && !isPopover ? 'kicl-padding-block-narrowest' : null,
    !hasLegend && !isPopover ? 'kicl-padding-inline-narrowest' : null,
    'kicl-position-relative',
    className
  );
};

export { useClassName };
