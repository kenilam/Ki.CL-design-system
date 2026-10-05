import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import type { SegmentedItemProps } from './spec';

// Context
import { useSegmented } from './context';

const CLASS_NAME = 'kicl--components--segmented__item';

/**
 * One option: a native radio, hidden, inside the label that shows it. The
 * label is what's seen and clicked; the radio carries the keyboard and value.
 */
const SegmentedItem = React.forwardRef<HTMLInputElement, SegmentedItemProps>(
  (
    { children, className, onChange, onKeyDown, onPointerDown, value, ...rest },
    ref
  ) => {
    const group = useSegmented();
    const controlled = group.value !== undefined;

    return (
      <label
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-padding-block-narrower',
          'kicl-padding-inline-narrow',
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
          defaultChecked={controlled ? undefined : group.defaultValue === value}
          name={group.name}
          onChange={(event) => {
            onChange?.(event);
            group.onValueChange(value);

            /*
             * In a scrolling row, a click on an option cut off at the edge
             * brings it into view. `nearest` leaves a visible option where
             * it is; the row's `scroll-behavior` decides how it moves.
             */
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
    );
  }
);

SegmentedItem.displayName = 'SegmentedItem';

export { SegmentedItem };
