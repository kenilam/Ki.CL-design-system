import React from 'react';

// Partials
import {
  type Control,
  type Value,
  type Values,
  isAllowed,
} from 'design/mdx/preview/spec';

const REPORTS: Record<string, string> = {
  checked: 'onCheckedChange',
  open: 'onOpenChange',
  value: 'onValueChange',
};

const reported = (name: string, report: unknown) => {
  return report !== null &&
    typeof report === 'object' &&
    'currentTarget' in report
    ? ((report.currentTarget as Record<string, Value>)[name] ?? undefined)
    : (report as Value);
};

/**
 * Sets `undefined` where the file writes a prop, so the control can take it
 * off.
 */
export const propsOf = (
  controls: Record<string, Control>,
  values: Values,
  literals: Set<string>,
  onReport: (name: string, value: Value) => void
) => {
  const props: Record<string, unknown> = {};

  for (const [name, control] of Object.entries(controls)) {
    if (!isAllowed(control, values)) {
      if (literals.has(name)) {
        props[name] = undefined;
      }

      continue;
    }

    if (values[name] !== undefined || literals.has(name)) {
      props[name] = values[name];
    }

    const report = control.on ?? REPORTS[name];

    if (report) {
      props[report] = (next: unknown) => {
        onReport(name, reported(name, next));
      };
    }
  }

  return props;
};

export const dressed = (
  children: React.ReactNode,
  props: Record<string, unknown>
) => {
  return React.Children.map(children, (child, index) => {
    return index === 0 && React.isValidElement(child)
      ? React.cloneElement(child, props)
      : child;
  });
};
