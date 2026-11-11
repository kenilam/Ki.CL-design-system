// Partials
import type { Tag } from './source';
import { type Control, type Value, type Values, isAllowed } from './spec';

export const extrasOf = (
  controls: Record<string, Control>,
  values: Values,
  tag: Tag | null
) => {
  const written = new Set(
    tag?.attributes.map(({ name }) => {
      return name;
    })
  );
  const extras: Values = {};

  for (const [name, control] of Object.entries(controls)) {
    if (!values[name] || !isAllowed(control, values)) {
      continue;
    }

    for (const [prop, value] of Object.entries(control.with ?? {})) {
      // A file that writes `value` has already set what `defaultValue` would.
      const controlled = prop.replace(/^default(\w)/, (_, first: string) => {
        return first.toLowerCase();
      });

      if (!written.has(prop) && !written.has(controlled)) {
        extras[prop] = value;
      }
    }
  }

  return extras;
};

export const appliedOf = (
  controls: Record<string, Control>,
  values: Values,
  extras: Values
) => {
  return {
    ...Object.fromEntries(
      Object.entries(values).map(([name, value]) => {
        return [
          name,
          controls[name] && !isAllowed(controls[name], values)
            ? undefined
            : value,
        ];
      })
    ),
    ...extras,
  };
};

export const withValue = (
  controls: Record<string, Control>,
  current: Values,
  name: string,
  value: Value
) => {
  return {
    ...current,
    [name]: value,
    ...Object.fromEntries(
      Object.entries(controls)
        .filter(([other, control]) => {
          return (
            control.except === name &&
            current[other] === (value ?? controls[name]?.default)
          );
        })
        .map(([other]) => {
          return [other, undefined];
        })
    ),
  };
};
