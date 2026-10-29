import 'react';

/**
 * Browsers support `command` and `commandfor`, but `@types/react` doesn't type
 * them yet, up to 19.2.18. Delete this file when DefinitelyTyped adds them.
 */

type Command =
  | 'close'
  | 'hide-popover'
  | 'request-close'
  | 'show'
  | 'show-modal'
  | 'show-popover'
  | 'toggle-popover'
  | `--${string}`;

declare module 'react' {
  // Merged without an `extends` clause, which would have to match the original
  // exactly.
  interface ButtonHTMLAttributes<T> {
    command?: Command;
    commandFor?: string;
  }

  interface InputHTMLAttributes<T> {
    command?: Command;
    commandFor?: string;
  }
}
