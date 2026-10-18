import type React from 'react';

/**
 * Visual or semantic divider - API aligned with
 * https://ui.shadcn.com/docs/components/separator
 */
export type Props = React.ComponentPropsWithoutRef<'div'> & {
  /** When true (default), purely visual - `role='none'`. Otherwise an `<hr>`. */
  decorative?: boolean;
  orientation?: React.AriaAttributes['aria-orientation'];
};
