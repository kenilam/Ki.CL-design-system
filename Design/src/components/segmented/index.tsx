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

const labelOf = (children: React.ReactNode, value: string | undefined) => {
  return React.Children.toArray(children).find(
    (
      child
    ): child is React.ReactElement<{
      value: string;
      children?: React.ReactNode;
    }> => {
      return (
        React.isValidElement(child) &&
        (child.props as { value?: string }).value === value
      );
    }
  )?.props.children;
};

/** Name it with `aria-label`, or a `<legend>` as the first child. */
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
      variant,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    // Only the popover needs this: its trigger shows the choice.
    const [chosen, setChosen] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const current = value ?? chosen;

    const pointer = useRef(false);

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

    // A legend has to stay the fieldset's first child to name it.
    const [first, ...others] = React.Children.toArray(children);
    const legend =
      React.isValidElement<React.ComponentPropsWithoutRef<'legend'>>(first) &&
      first.type === 'legend'
        ? first
        : null;
    const hasLegend = legend !== null;

    const options = hasLegend ? others : [first, ...others];
    const isPopover = collapse === 'popover';
    const legendId = `${id}__legend`;

    const optionsBox = (
      <Layout autoFlow='column' gap='none'>
        <div
          className={classNames(
            `${CLASS_NAME}__options`,
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

    // Above tablet, CSS lays the panel out in place and hides the trigger.
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
        <Layout
          gap={isPopover && hasLegend ? 'narrowest' : 'none'}
          justifyItems={isPopover && hasLegend ? 'start' : undefined}
        >
          <fieldset
            className={classNames(
              CLASS_NAME,
              collapse ? `${CLASS_NAME}--collapse--${collapse}` : null,
              collapsed ? `${CLASS_NAME}--collapsed` : null,
              hasLegend ? `${CLASS_NAME}--with-legend` : null,
              isPopover ? `${CLASS_NAME}__popover` : null,
              isPopover && collapsed
                ? `${CLASS_NAME}__popover--collapsed`
                : null,
              'kicl-border-radius-md',
              !hasLegend && !isPopover ? 'kicl-padding-block-narrowest' : null,
              !hasLegend && !isPopover ? 'kicl-padding-inline-narrowest' : null,
              'kicl-position-relative',
              className
            )}
            disabled={disabled}
            ref={ref}
            {...rest}
          >
            {legend
              ? React.cloneElement(legend, {
                  className: classNames(
                    legend.props.className,
                    'kicl-font-size-small',
                    'kicl-inline-size-full',
                    !isPopover ? 'kicl-margin-block-end-narrower' : null
                  ),
                  id: legendId,
                })
              : null}
            {isPopover ? (
              <>
                <PopoverTrigger asChild>
                  <Button
                    after={<Ri.RiArrowDownSLine aria-hidden />}
                    className={classNames(
                      `${CLASS_NAME}__trigger`,
                      'kicl-min-block-size-field'
                    )}
                    id={`${id}__trigger`}
                    disabled={disabled}
                    size='small'
                    variant='ghost'
                  >
                    {labelOf(children, current) ?? null}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  aria-label={hasLegend ? undefined : rest['aria-label']}
                  aria-labelledby={hasLegend ? legendId : undefined}
                  className={`${CLASS_NAME}__panel`}
                  forceMount
                  placement={placement}
                  variant={variant}
                >
                  {optionsBox}
                </PopoverContent>
              </>
            ) : (
              optionsBox
            )}
          </fieldset>
        </Layout>
      </SegmentedContext.Provider>
    );

    return isPopover ? (
      <Popover onOpenChange={setOpen} open={open}>
        {fieldset}
      </Popover>
    ) : (
      fieldset
    );
  }
);

Segmented.displayName = 'Segmented';

export type { SegmentedItemProps, SegmentedProps } from './spec';
export { Segmented, SegmentedItem };
