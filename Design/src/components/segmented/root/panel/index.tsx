import React from 'react';

// Components
import { PopoverContent } from 'design/components/popover';

// Context
import { useSegmented } from 'design/components/segmented/context';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--segmented__panel';

const SegmentedPanel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    'aria-label': label,
    hasLegend,
    legendId,
    placement,
    variant,
  } = useSegmented();

  return (
    <PopoverContent
      aria-label={hasLegend ? undefined : label}
      aria-labelledby={hasLegend ? legendId : undefined}
      className={CLASS_NAME}
      forceMount
      placement={placement}
      variant={variant}
    >
      {children}
    </PopoverContent>
  );
};

export { SegmentedPanel };
