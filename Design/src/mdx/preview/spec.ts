export type Value = string | number | boolean | undefined;

/** `undefined` means no prop, so the component's own default applies. */
export type Values = Record<string, Value>;

export type Control = {
  options: readonly (string | number)[] | 'boolean';
  /**
   * The component's own default, if it's in the list. Choosing it sets no
   * prop, so the list needs no "Default". `true` for a boolean that is on
   * until it is turned off.
   */
  default?: string | number | boolean;
  /**
   * Props this one needs, such as `{ lookLikeButton: true }`. Until they hold,
   * the control is hidden and the prop left out.
   */
  when?: Values;
  /**
   * Props that rule this one out, such as `{ property: 'scramble' }` for
   * `split`. While they hold, the control is hidden and the prop left out.
   */
  unless?: Values;
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

export const controlOf = (control: Control | Control['options']): Control => {
  return typeof control === 'string' || Array.isArray(control)
    ? { options: control as Control['options'] }
    : (control as Control);
};

const holds = (wanted: Values, values: Values) => {
  return Object.entries(wanted).every(([name, value]) => {
    return (values[name] ?? false) === value;
  });
};

export const isAllowed = (control: Control, values: Values) => {
  if (control.unless && holds(control.unless, values)) {
    return false;
  }

  return holds(control.when ?? {}, values);
};
