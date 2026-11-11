import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Context
import { useSegmented } from 'design/components/segmented/context';

// Partials
import { legendOf } from 'design/components/segmented/children';

const CLASS_NAME = 'kicl--components--segmented__options';

const back = (event: React.SyntheticEvent<HTMLDivElement>) => {
  event.currentTarget
    .querySelector(':checked')
    ?.closest('label')
    ?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
};

const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    back(event);
  }
};

const SegmentedOptions: React.FunctionComponent = () => {
  const { children, collapse, hasLegend, isPopover } = useSegmented();
  const { options } = legendOf(children);

  return (
    <Layout autoFlow='column' gap='none'>
      <div
        className={classNames(
          CLASS_NAME,
          hasLegend && !isPopover ? 'kicl-padding-block-narrowest' : null,
          hasLegend && !isPopover ? 'kicl-padding-inline-narrowest' : null,
          'kicl-position-relative'
        )}
        onBlur={collapse === 'scroll' ? onBlur : undefined}
        onPointerLeave={collapse === 'scroll' ? back : undefined}
      >
        {options}
      </div>
    </Layout>
  );
};

export { SegmentedOptions };
