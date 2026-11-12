import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Context
import { useSegmented } from 'design/components/segmented/context';

// Partials
import { legendOf } from 'design/components/segmented/children';

// Styles
import './styles.scss';

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
  const { children, collapse, collapsed, hasLegend, isPanel } = useSegmented();
  const { options } = legendOf(children);
  const scrolls = collapse === 'scroll';

  return (
    <Layout gap='none'>
      <div
        className={classNames(
          CLASS_NAME,
          'kicl-min-inline-size-0',
          scrolls ? `${CLASS_NAME}--collapse--scroll` : null,
          scrolls && collapsed ? `${CLASS_NAME}--collapsed` : null,
          hasLegend && !isPanel ? 'kicl-padding-block-narrowest' : null,
          hasLegend && !isPanel ? 'kicl-padding-inline-narrowest' : null,
          'kicl-position-relative'
        )}
        onBlur={scrolls ? onBlur : undefined}
        onPointerLeave={scrolls ? back : undefined}
      >
        {options}
      </div>
    </Layout>
  );
};

export { SegmentedOptions };
