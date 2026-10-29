import React from 'react';

// Components
import { Segmented, SegmentedItem, Switch } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

export type Value = string | number | boolean | undefined;

/** `undefined` means no prop, so the component's own default applies. */
export type Values = Record<string, Value>;

export type Control = {
  options: readonly (string | number)[] | 'boolean';
  /**
   * The component's own default, if it's in the list. Choosing it sets no
   * prop, so the list needs no "Default".
   */
  default?: string | number;
  /**
   * Props this one needs, such as `{ lookLikeButton: true }`. Until they hold,
   * the control is hidden and the prop left out.
   */
  when?: Values;
  /** Another prop whose value this list leaves out, such as `is` for `lookLike`. */
  except?: string;
  /**
   * The handler that moves this control when the component is used. `checked`,
   * `open` and `value` have one already.
   */
  on?: string;
  /**
   * Props added while this control is on, unless the file writes them, such
   * as a value for `readOnly`.
   */
  with?: Record<string, string>;
  /**
   * On a page that replays, changing this keeps the example mounted so the
   * component's own transition shows, as for `in`.
   */
  live?: boolean;
};

export type ControlsSpec = Record<string, Control | Control['options']>;

const UNSET = '';

export const controlOf = (control: Control | Control['options']): Control => {
  return typeof control === 'string' || Array.isArray(control)
    ? { options: control as Control['options'] }
    : (control as Control);
};

export const isAllowed = (control: Control, values: Values) => {
  return Object.entries(control.when ?? {}).every(([name, value]) => {
    return (values[name] ?? false) === value;
  });
};

type Props = {
  controls: Record<string, Control>;
  values: Values;
  onChange: (name: string, value: Value) => void;
};

const Controls: React.FunctionComponent<Props> = ({
  controls,
  onChange,
  values,
}) => {
  const t = useCopy();

  return (
    <>
      {Object.entries(controls).map(([name, control]) => {
        if (!isAllowed(control, values)) {
          return null;
        }

        if (control.options === 'boolean') {
          return (
            <Switch
              checked={Boolean(values[name])}
              key={name}
              onCheckedChange={(checked) => {
                onChange(name, checked);
              }}
              size='small'
            >
              {name}
            </Switch>
          );
        }

        const excluded = control.except
          ? (values[control.except] ?? controls[control.except]?.default)
          : undefined;
        const options = control.options.filter((option) => {
          return option !== excluded;
        });
        const fallback =
          control.default ?? (options.includes('default') ? 'default' : UNSET);

        return (
          <Segmented
            key={name}
            collapse='popover'
            collapsed
            onValueChange={(value) => {
              const option =
                options.find((option) => {
                  return String(option) === value;
                }) ?? value;

              onChange(name, option === fallback ? undefined : option);
            }}
            value={String(values[name] ?? fallback)}
          >
            <legend>{name}</legend>
            {fallback === UNSET ? (
              <SegmentedItem value={UNSET}>{t('docs_default')}</SegmentedItem>
            ) : null}
            {options.map((option) => {
              return (
                <SegmentedItem key={option} value={String(option)}>
                  {option}
                </SegmentedItem>
              );
            })}
          </Segmented>
        );
      })}
    </>
  );
};

export { Controls };
