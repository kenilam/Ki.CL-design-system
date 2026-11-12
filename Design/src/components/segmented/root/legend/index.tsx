import React from 'react';

// Libraries
import classNames from 'classnames';

// Context
import { useSegmented } from 'design/components/segmented/context';

// Partials
import { legendOf } from 'design/components/segmented/children';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--segmented__legend';

/** A legend has to stay the fieldset's first child to name it. */
const SegmentedLegend: React.FunctionComponent = () => {
  const { children, isPopover, legendId } = useSegmented();
  const { legend } = legendOf(children);

  if (!legend) {
    return null;
  }

  return React.cloneElement(legend, {
    className: classNames(
      CLASS_NAME,
      legend.props.className,
      'kicl-font-size-small',
      'kicl-inline-size-full',
      !isPopover ? 'kicl-margin-block-end-narrower' : null
    ),
    id: legendId,
  });
};

export { SegmentedLegend };
