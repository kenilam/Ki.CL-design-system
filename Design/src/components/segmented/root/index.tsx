import React from 'react';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { SegmentedProps } from 'design/components/segmented/spec';

// Context
import { useSegmented } from 'design/components/segmented/context';

// Partials
import { SegmentedLegend } from './legend';
import { SegmentedOptions } from './options';
import { SegmentedPanel } from './panel';
import { SegmentedTrigger } from './trigger';
import { useClassName } from './use-class-name';

type Props = Pick<SegmentedProps, 'className'> &
  Omit<React.ComponentProps<'fieldset'>, 'defaultValue' | 'onChange'>;

const Root: React.FunctionComponent<Props> = ({ className, ...rest }) => {
  const { disabled, hasLegend, isPanel, isPopover } = useSegmented();

  return (
    <Layout
      gap={isPopover && hasLegend ? 'narrowest' : 'none'}
      justifyItems={isPopover && hasLegend ? 'start' : undefined}
    >
      <fieldset
        className={useClassName(className)}
        disabled={disabled}
        {...rest}
      >
        <SegmentedLegend />
        {isPanel ? (
          <>
            <SegmentedTrigger />
            <SegmentedPanel>
              <SegmentedOptions />
            </SegmentedPanel>
          </>
        ) : (
          <SegmentedOptions />
        )}
      </fieldset>
    </Layout>
  );
};

export { Root };
