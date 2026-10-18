import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonProps } from 'design/components/button';

export type InputGroupProps = ComponentPropsWithoutRef<'div'>;

/** An addon before the control sits at its start, one after it at its end. */
export type InputGroupAddonProps = ComponentPropsWithoutRef<'div'>;

export type InputGroupButtonProps = Pick<ButtonProps, 'children'> &
  ComponentPropsWithoutRef<'button'> & {
    /** `ghost` is a bare control inside the field. `default` is a small button. */
    variant?: 'default' | 'ghost';
  };

export type InputGroupInputProps = ComponentPropsWithoutRef<'input'>;

export type InputGroupTextareaProps = ComponentPropsWithoutRef<'textarea'>;

export type InputGroupTextProps = ComponentPropsWithoutRef<'span'>;
