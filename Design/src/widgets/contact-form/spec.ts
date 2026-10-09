import type React from 'react';

export type Values = {
  Email: string;
  Message: string;
};

export type Props = Pick<React.ComponentProps<'form'>, 'className'> & {
  /** The address the form starts with, for a visitor whose address is known. */
  email?: string;
  /**
   * Sends the message. Rejecting fails the form, and the error's message is
   * shown over the button with what was typed still in the fields.
   */
  onSubmit: (values: Values) => Promise<unknown>;
};
