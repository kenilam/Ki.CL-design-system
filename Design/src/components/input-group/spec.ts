import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonProps } from 'design/components/button';
import type { Variant } from 'design/components/spec';

export type InputGroupProps = ComponentPropsWithoutRef<'div'>;

/** An addon before the control sits at its start, one after it at its end. */
export type InputGroupAddonProps = ComponentPropsWithoutRef<'div'>;

export type InputGroupButtonProps = Pick<ButtonProps, 'children'> &
  ComponentPropsWithoutRef<'button'> & {
    variant?: Extract<Variant, 'primary' | 'ghost'>;
  };

export type InputGroupInputProps = ComponentPropsWithoutRef<'input'>;

export type InputGroupTextareaProps = ComponentPropsWithoutRef<'textarea'>;

export type InputGroupTextProps = ComponentPropsWithoutRef<'span'>;
