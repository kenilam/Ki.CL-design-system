import type React from 'react';

export type Values = {
  Email: string;
  Message: string;
};

export type Props = Pick<React.ComponentProps<'form'>, 'className'> & {
  /** Prefills the email field. */
  email?: string;
  /** A rejection's message shows over the button, and the fields keep what was typed. */
  onSubmit: (values: Values) => Promise<unknown>;
};
