import React, { useId, useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

// Spec
import type { SegmentedProps } from './spec';

// Styles
import './styles.scss';

// Context
import { SegmentedContext } from './context';

// Partials
import { SegmentedItem } from './item';

const CLASS_NAME = 'kicl--components--segmented';

/**
 * A segmented control: one choice of a few, side by side on one track, as
 * a native `<fieldset>` of radios. The chosen option's highlight slides to
 * it, anchored to that option in CSS. Name it with `aria-label`, or a
 * `<legend>` as the first child.
 */
/** The label of the option whose value is chosen, read from the children. */
const labelOf = (children: React.ReactNode, value: string | undefined) =>
  React.Children.toArray(children).find(
    (
      child
    ): child is React.ReactElement<{
      value: string;
      children?: React.ReactNode;
    }> =>
      React.isValidElement(child) &&
      (child.props as { value?: string }).value === value
  )?.props.children;

const Segmented = React.forwardRef<HTMLFieldSetElement, SegmentedProps>(
  (
    {
      children,
      className,
      collapse,
      defaultValue,
      name,
      onValueChange,
      placement,
      value,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    // Only the popover needs this: its trigger shows the choice.
    const [chosen, setChosen] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const current = value ?? chosen;

    /*
     * Whether the last press was a pointer. A click picks and is done, so the
     * popover closes; an arrow key only moves to the next option, so it stays
     * open and focus stays on the options.
     */
    const pointer = useRef(false);

    // A legend has to stay the fieldset's first child to name it.
    const [first, ...others] = React.Children.toArray(children);
    const hasLegend = React.isValidElement(first) && first.type === 'legend';
    const legend = hasLegend ? first : null;
    const options = hasLegend ? others : [first, ...others];

    const fieldset = (
      <SegmentedContext.Provider
        value={{
          defaultValue,
          name: name ?? id,
          onPress: (byPointer) => {
            pointer.current = byPointer;
          },
          onValueChange: (next) => {
            const details = { pointer: pointer.current };

            pointer.current = false;
            setChosen(next);

            if (details.pointer) {
              setOpen(false);
            }

            onValueChange?.(next, details);
          },
          value,
        }}
      >
        <fieldset
          className={classNames(
            CLASS_NAME,
            collapse && `${CLASS_NAME}--collapse--${collapse}`,
            'kicl-border-radius-md',
            'kicl-padding-block-narrowest',
            'kicl-padding-inline-narrowest',
            'kicl-position-relative',
            className
          )}
          ref={ref}
          {...rest}
        >
          {legend}
          <div className={`${CLASS_NAME}__options`}>{options}</div>
        </fieldset>
      </SegmentedContext.Provider>
    );

    if (collapse !== 'popover') {
      return fieldset;
    }

    /*
     * One set of radios either way. Above tablet the panel is laid out in
     * place as the usual row and the trigger is hidden, all in CSS; below it
     * the trigger shows the choice and the panel opens as a popover.
     */
    return (
      <Popover
        block
        className={`${CLASS_NAME}__popover`}
        onOpenChange={setOpen}
        open={open}
      >
        {/* The trigger reads as the choice; the panel takes the control's name. */}
        <PopoverTrigger
          className={classNames(
            `${CLASS_NAME}__trigger`,
            'kicl-border-radius-md',
            'kicl-padding-block-narrower',
            'kicl-padding-inline-narrow'
          )}
        >
          {labelOf(children, current)}
          <Ri.RiArrowDownSLine aria-hidden />
        </PopoverTrigger>
        <PopoverContent
          aria-label={rest['aria-label']}
          className={`${CLASS_NAME}__panel`}
          placement={placement}
        >
          {fieldset}
        </PopoverContent>
      </Popover>
    );
  }
);

Segmented.displayName = 'Segmented';

export type { SegmentedItemProps, SegmentedProps } from './spec';
export { Segmented, SegmentedItem };
