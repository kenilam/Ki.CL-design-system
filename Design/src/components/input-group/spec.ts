import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonProps } from 'design/components/button';
import type { PolymorphicIsProps } from 'design/components/polymorphic';
import type { Variant } from 'design/components/spec';

/**
 * `label` when the group only dresses its control (an icon, a prefix), so a
 * click anywhere in it focuses the control. `fieldset` when it also holds a
 * button, which a label can't contain. `span` when it sits inside a label
 * that already holds the field's name.
 */
export type InputGroupIs = 'fieldset' | 'label' | 'span';

export type InputGroupProps = PolymorphicIsProps<
  InputGroupIs,
  object,
  'fieldset'
>;

export type InputGroupButtonProps = Pick<ButtonProps, 'children'> &
  ComponentPropsWithoutRef<'button'> & {
    variant?: Extract<Variant, 'primary' | 'ghost'>;
  };

export type InputGroupInputProps = ComponentPropsWithoutRef<'input'>;

export type InputGroupTextareaProps = ComponentPropsWithoutRef<'textarea'>;

export type InputGroupTextProps = ComponentPropsWithoutRef<'span'>;
