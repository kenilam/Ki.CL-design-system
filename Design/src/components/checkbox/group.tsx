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
      setItems((current) => {
        return [
          ...current.filter(({ value }) => {
            return value !== item;
          }),
          { disabled, value: item },
        ];
      });

      return () => {
        setItems((current) => {
          return current.filter(({ value }) => {
            return value !== item;
          });
        });
      };
    }, []);

    const enabled = useMemo(() => {
      return items
        .filter(({ disabled }) => {
          return !disabled;
        })
        .map(({ value }) => {
          return value;
        });
    }, [items]);
    const picked = enabled.filter((item) => {
      return value.includes(item);
    });
    let all: boolean | 'indeterminate' =
      picked.length > 0 ? 'indeterminate' : false;

    if (enabled.length > 0 && picked.length === enabled.length) {
      all = true;
    }

    return (
      <CheckboxGroupContext.Provider
        value={{
          name: name ?? reactId,
          onCheck: (item, checked) => {
            change(
              checked
                ? [
                    ...value.filter((current) => {
                      return current !== item;
                    }),
                    item,
                  ]
                : value.filter((current) => {
                    return current !== item;
                  })
            );
          },
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
                onCheckedChange={(checked) => {
                  change(
                    checked
                      ? [
                          ...value.filter((item) => {
                            return !enabled.includes(item);
                          }),
                          ...enabled,
                        ]
                      : value.filter((item) => {
                          return !enabled.includes(item);
                        })
                  );
                }}
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
