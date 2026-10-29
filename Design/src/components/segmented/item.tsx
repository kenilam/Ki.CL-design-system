import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { SegmentedItemProps } from './spec';

// Context
import { useSegmented } from './context';

const CLASS_NAME = 'kicl--components--segmented__item';

const SegmentedItem = React.forwardRef<HTMLInputElement, SegmentedItemProps>(
  (
    { children, className, onChange, onKeyDown, onPointerDown, value, ...rest },
    ref
  ) => {
    const group = useSegmented();
    const controlled = group.value !== undefined;

    return (
      // Its own SCSS moves `justify-items` in a popover panel, and beats Layout's.
      <Layout alignItems='center' gap='none' justifyItems='center'>
        <label
          className={classNames(
            CLASS_NAME,
            'kicl-font-size-small',
            'kicl-padding-block-narrower',
            'kicl-padding-inline',
            // Above the highlight, which the track draws first.
            'kicl-position-relative',
            'kicl-text-transform-uppercase',
            className
          )}
        >
          <input
            checked={controlled ? group.value === value : undefined}
            className={classNames(
              `${CLASS_NAME}__control`,
              'kicl-inset-0',
              'kicl-position-absolute'
            )}
            defaultChecked={
              controlled ? undefined : group.defaultValue === value
            }
            name={group.name}
            onChange={(event) => {
              onChange?.(event);
              group.onValueChange(value);

              event.currentTarget.parentElement?.scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              });
            }}
            onKeyDown={(event) => {
              group.onPress(false);
              onKeyDown?.(event);
            }}
            onPointerDown={(event) => {
              group.onPress(true);
              onPointerDown?.(event);
            }}
            ref={ref}
            type='radio'
            value={value}
            {...rest}
          />
          {children}
        </label>
      </Layout>
    );
  }
);

SegmentedItem.displayName = 'SegmentedItem';

export { SegmentedItem };
