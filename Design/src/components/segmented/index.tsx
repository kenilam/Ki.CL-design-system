import React, { useId, useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { Button } from 'design/components/button';
import { Layout } from 'design/components/layout';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components/popover';

// Spec
import type { SegmentedProps } from './spec';

// Styles
import './styles.scss';

// Context
import { SegmentedContext } from './context';

// Partials
import { SegmentedItem } from './item';

const CLASS_NAME = 'kicl--components--segmented';

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

/**
 * A segmented control: one choice of a few, side by side on one track, as
 * a native `<fieldset>` of radios. The chosen option's highlight slides to
 * it, anchored to that option in CSS. Name it with `aria-label`, or a
 * `<legend>` as the first child.
 */
const Segmented = React.forwardRef<HTMLFieldSetElement, SegmentedProps>(
  (
    {
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
     * Whether the last press was a pointer or an arrow key, reported with the
     * value. The panel stays open either way: a reader may want another look.
     */
    const pointer = useRef(false);

    /*
     * In a scrolling row, a choice scrolled out of view comes back as soon as
     * the reader leaves the row, by pointer or by focus, so the row never
     * stays showing options the reader hasn't picked. `nearest` moves nothing
     * while the choice is in view.
     */
    const back = (event: React.SyntheticEvent<HTMLDivElement>) =>
      event.currentTarget
        .querySelector(':checked')
        ?.closest('label')
        ?.scrollIntoView({ block: 'nearest', inline: 'nearest' });

    const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        back(event);
      }
    };

    // A legend has to stay the fieldset's first child to name it.
    const [first, ...others] = React.Children.toArray(children);
    const legend =
      React.isValidElement<React.ComponentPropsWithoutRef<'legend'>>(first) &&
      first.type === 'legend'
        ? first
        : null;
    const hasLegend = legend !== null;

    // As a popover, the caption is outside, so the track stays as it is.
    const legendAbove = hasLegend && collapse !== 'popover';
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

            // The panel stays open on a pick: the reader may want another.
            onValueChange?.(next, details);
          },
          value,
        }}
      >
        <Layout gap='none'>
          <fieldset
            className={classNames(
              CLASS_NAME,
              collapse && `${CLASS_NAME}--collapse--${collapse}`,
              collapsed && `${CLASS_NAME}--collapsed`,
              legendAbove && `${CLASS_NAME}--with-legend`,
              'kicl-border-radius-md',
              // With a legend above, the options box is the track and takes the padding.
              !legendAbove && 'kicl-padding-block-narrowest',
              !legendAbove && 'kicl-padding-inline-narrowest',
              'kicl-position-relative',
              // As a popover, the outer box takes the class.
              collapse !== 'popover' && className
            )}
            disabled={disabled}
            ref={ref}
            {...rest}
          >
            {/* As a popover, the caption labels the trigger instead; the legend still names the radios. */}
            {legend
              ? React.cloneElement(legend, {
                  className: classNames(
                    legend.props.className,
                    collapse === 'popover'
                      ? 'kicl-hidden'
                      : [
                          'kicl-font-size-small',
                          'kicl-inline-size-full',
                          'kicl-margin-block-end-narrower',
                        ]
                  ),
                })
              : null}
            <Layout autoFlow='column' gap='none'>
              <div
                className={classNames(
                  `${CLASS_NAME}__options`,
                  legendAbove && 'kicl-padding-block-narrowest',
                  legendAbove && 'kicl-padding-inline-narrowest',
                  'kicl-position-relative'
                )}
                onBlur={collapse === 'scroll' ? onBlur : undefined}
                onPointerLeave={collapse === 'scroll' ? back : undefined}
              >
                {options}
              </div>
            </Layout>
          </fieldset>
        </Layout>
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
        display='grid'
        className={classNames(
          `${CLASS_NAME}__popover`,
          collapsed && `${CLASS_NAME}__popover--collapsed`,
          className
        )}
        // With a caption, the trigger sits under it, as the track sits under its legend.
        gap={hasLegend ? 'narrowest' : 'none'}
        justifyItems={hasLegend ? 'start' : undefined}
        onOpenChange={setOpen}
        open={open}
      >
        {/* The caption, as a label for the trigger: a button is labelable. */}
        {legend ? (
          <label className='kicl-font-size-small' htmlFor={`${id}__trigger`}>
            {legend.props.children}
          </label>
        ) : null}
        {/* The trigger is a ghost button that reads as the choice; the panel takes the control's name. */}
        <PopoverTrigger asChild>
          <Button
            after={<Ri.RiArrowDownSLine aria-hidden />}
            // It stands in for a select, so it is as tall as one.
            className={classNames(
              `${CLASS_NAME}__trigger`,
              'kicl-min-block-size-field'
            )}
            id={`${id}__trigger`}
            // A disabled control opens nothing, as its radios take nothing.
            disabled={disabled}
            size='small'
            variant='ghost'
          >
            {labelOf(children, current) ?? null}
          </Button>
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
