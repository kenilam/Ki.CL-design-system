import React from 'react';

// Spec
import type { SegmentedProps } from './spec';

// Styles
import './styles.scss';

// Context
import { Provider } from './context';

// Partials
import { SegmentedItem } from './item';
import { Root } from './root';

/** Name it with `aria-label`, or a `<legend>` as the first child. */
const Segmented = React.forwardRef<HTMLFieldSetElement, SegmentedProps>(
  (
    {
      block,
      children,
      className,
      collapse,
      collapsed,
      defaultValue,
      disabled,
      name,
      onValueChange,
      placement,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    return (
      <Provider
        aria-label={rest['aria-label']}
        block={block}
        collapse={collapse}
        collapsed={collapsed}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        options={children}
        placement={placement}
        value={value}
        variant={variant}
      >
        <Root className={className} ref={ref} {...rest} />
      </Provider>
    );
  }
);

Segmented.displayName = 'Segmented';

export type { SegmentedItemProps, SegmentedProps } from './spec';
export { Segmented, SegmentedItem };
