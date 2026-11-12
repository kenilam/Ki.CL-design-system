import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { SegmentedItemProps } from 'design/components/segmented/spec';

// Partials
import { useControl } from './use-control';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--segmented__item';

const SegmentedItem = React.forwardRef<HTMLInputElement, SegmentedItemProps>(
  (
    { children, className, onChange, onKeyDown, onPointerDown, value, ...rest },
    ref
  ) => {
    const control = useControl({ onChange, onKeyDown, onPointerDown, value });

    return (
      <Layout alignItems='center' gap='none'>
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
            checked={control.checked}
            className={classNames(
              `${CLASS_NAME}__control`,
              'kicl-inset-0',
              'kicl-position-absolute'
            )}
            defaultChecked={control.defaultChecked}
            name={control.name}
            onChange={control.onChange}
            onKeyDown={control.onKeyDown}
            onPointerDown={control.onPointerDown}
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
