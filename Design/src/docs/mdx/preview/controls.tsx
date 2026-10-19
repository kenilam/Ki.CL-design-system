import React from 'react';

// Components
import { Segmented, SegmentedItem, Switch } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

export type Value = string | number | boolean | undefined;

/** What each control is set to. `undefined` is the component's own default: no prop. */
export type Values = Record<string, Value>;

/**
 * One prop the reader can change: a list of its values, or `'boolean'` for a
 * flag. A list also offers "Default", which sets no prop, unless the
 * component's default is one of its values.
 */
export type Control = {
  options: readonly (string | number)[] | 'boolean';
  /**
   * The value the component takes when the prop is left out, when it is in
   * the list. It stands for no prop, so the list needs no "Default".
   */
  default?: string | number;
  /**
   * Other props this one needs, such as `{ lookLikeButton: true }` for the
   * look of a link. While they don't hold, the control is hidden and the
   * prop is left out.
   */
  when?: Values;
  /**
   * The prop the component reports a change through, so using the component
   * moves the control. `checked`, `open` and `value` have theirs already.
   */
  on?: string;
  /**
   * Props the example needs for this one to show, such as a value for
   * `readOnly`. They are added while the control is on, unless the file
   * writes them itself.
   */
  with?: Record<string, string>;
  /**
   * The component animates this change itself, such as `in`. On a page that
   * replays, changing it keeps the example mounted, so the reader sees the
   * transition rather than a fresh render.
   */
  live?: boolean;
};

export type ControlsSpec = Record<string, Control | Control['options']>;

/** The radio value for the component's own default: no prop. */
const UNSET = '';

export const controlOf = (control: Control | Control['options']): Control =>
  typeof control === 'string' || Array.isArray(control)
    ? { options: control as Control['options'] }
    : (control as Control);

/** Whether a control's `when` holds for the values chosen. */
export const isAllowed = (control: Control, values: Values) =>
  Object.entries(control.when ?? {}).every(
    ([name, value]) => (values[name] ?? false) === value
  );

type Props = {
  controls: Record<string, Control>;
  values: Values;
  onChange: (name: string, value: Value) => void;
};

/** A field for each prop. A list is a dropdown, a flag a switch. */
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
              onCheckedChange={(checked) => onChange(name, checked)}
              size='small'
            >
              {name}
            </Switch>
          );
        }

        const { options } = control;
        const fallback =
          control.default ?? (options.includes('default') ? 'default' : UNSET);

        return (
          <Segmented
            key={name}
            collapse='popover'
            collapsed
            onValueChange={(value) => {
              const option =
                options.find((option) => String(option) === value) ?? value;

              onChange(name, option === fallback ? undefined : option);
            }}
            value={String(values[name] ?? fallback)}
          >
            <legend>{name}</legend>
            {fallback === UNSET && (
              <SegmentedItem value={UNSET}>{t('docs_default')}</SegmentedItem>
            )}
            {options.map((option) => (
              <SegmentedItem key={option} value={String(option)}>
                {option}
              </SegmentedItem>
            ))}
          </Segmented>
        );
      })}
    </>
  );
};

export { Controls };
