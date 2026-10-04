import type { InputHTMLAttributes, ReactNode } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  /** Inside the field, before the text: an icon, a prefix, a CTA. */
  before?: ReactNode;
  /** Inside the field, after the text: an icon, a suffix, a CTA. */
  after?: ReactNode;
};
