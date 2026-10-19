import React, { useCallback, useId, useMemo, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { CheckboxGroupProps } from './spec';

// Context
import { CheckboxGroupContext } from './context';

// Partials
import { Checkbox } from './checkbox';

const CLASS_NAME = 'kicl--components--checkbox-group';

type Item = { disabled: boolean; value: string };

/**
 * Checkboxes as a native `<fieldset>`, holding which of them are checked.
 * Each `Checkbox` inside it with a `value` is one of the group. With
 * `selectAll`, a box above them checks or clears them all, and shows partly
 * checked while only some are. A disabled box keeps its state through it.
 */
const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      children,
      className,
      defaultValue = [],
      legend,
      name,
      onValueChange,
      selectAll,
      value: controlled,
      ...rest
    },
    ref
  ) => {
    const reactId = useId();
    const [uncontrolled, setUncontrolled] = useState(defaultValue);
    const [items, setItems] = useState<Item[]>([]);

    const value = controlled ?? uncontrolled;

    const change = (next: string[]) => {
      if (controlled === undefined) {
        setUncontrolled(next);
      }

      onValueChange?.(next);
    };

    const register = useCallback((item: string, disabled: boolean) => {
      setItems((current) => [
        ...current.filter(({ value }) => value !== item),
        { disabled, value: item },
      ]);

      return () =>
        setItems((current) => current.filter(({ value }) => value !== item));
    }, []);

    // What "select all" acts on: the boxes a reader can change.
    const enabled = useMemo(
      () => items.filter(({ disabled }) => !disabled).map(({ value }) => value),
      [items]
    );
    const picked = enabled.filter((item) => value.includes(item));
    const all: boolean | 'indeterminate' =
      enabled.length > 0 && picked.length === enabled.length
        ? true
        : picked.length > 0 && 'indeterminate';

    return (
      <CheckboxGroupContext.Provider
        value={{
          name: name ?? reactId,
          onCheck: (item, checked) =>
            change(
              checked
                ? [...value.filter((current) => current !== item), item]
                : value.filter((current) => current !== item)
            ),
          register,
          value,
        }}
      >
        <Layout gap='narrower' justifyItems='start'>
          <fieldset
            ref={ref}
            className={classNames(CLASS_NAME, className)}
            {...rest}
          >
            {legend ? (
              <legend
                className={classNames(
                  `${CLASS_NAME}__legend`,
                  'kicl-margin-block-end-narrower'
                )}
              >
                {legend}
              </legend>
            ) : null}
            {selectAll ? (
              <Checkbox
                checked={all}
                className={`${CLASS_NAME}__select-all`}
                onCheckedChange={(checked) =>
                  change(
                    checked
                      ? [
                          ...value.filter((item) => !enabled.includes(item)),
                          ...enabled,
                        ]
                      : value.filter((item) => !enabled.includes(item))
                  )
                }
              >
                {selectAll}
              </Checkbox>
            ) : null}
            {children}
          </fieldset>
        </Layout>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
