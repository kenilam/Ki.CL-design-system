import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonProps } from 'design/components/button';
import type { PolymorphicIsProps } from 'design/components/polymorphic';
import type { Variant } from 'design/components/spec';

/**
 * `label` makes a click anywhere focus the control. Use `fieldset` when the
 * group holds a button, which a label can't contain.
 */
export type InputGroupIs = 'fieldset' | 'label';

export type InputGroupProps = PolymorphicIsProps<
  InputGroupIs,
  object,
  'fieldset'
>;

export type InputGroupButtonProps = Pick<
  ButtonProps,
  'after' | 'before' | 'block' | 'busy' | 'children'
> &
  ComponentPropsWithoutRef<'button'> &
  (
    | { size?: never; variant?: Extract<Variant, 'ghost'> }
    | { size?: ButtonProps['size']; variant: Extract<Variant, 'primary'> }
  );

export type InputGroupInputProps = ComponentPropsWithoutRef<'input'>;

export type InputGroupTextareaProps = ComponentPropsWithoutRef<'textarea'>;
