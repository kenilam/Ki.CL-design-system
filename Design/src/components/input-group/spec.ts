import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

import type { ButtonProps } from '../button';

export type InputGroupAlign =
  'inline-start' | 'inline-end' | 'block-start' | 'block-end';

export type InputGroupProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export type InputGroupAddonProps = HTMLAttributes<HTMLDivElement> & {
  align?: InputGroupAlign;
};

export type InputGroupButtonProps = Pick<ButtonProps, 'children'> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /** `ghost` is a bare control inside the field. `default` is a small button. */
    variant?: 'default' | 'ghost';
  };

export type InputGroupInputProps = InputHTMLAttributes<HTMLInputElement>;

export type InputGroupTextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputGroupTextProps = HTMLAttributes<HTMLSpanElement>;
