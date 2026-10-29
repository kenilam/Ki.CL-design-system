import type {
  ControllerProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import type React from 'react';

import type { LayoutProps } from 'design/components/layout';

type FormElementProps = Pick<
  React.ComponentPropsWithoutRef<'form'>,
  | 'action'
  | 'aria-describedby'
  | 'aria-label'
  | 'aria-labelledby'
  | 'autoComplete'
  | 'className'
  | 'id'
  | 'method'
  | 'name'
  | 'noValidate'
  | 'onSubmit'
>;

export type FormProps<TFieldValues extends FieldValues> =
  React.PropsWithChildren<UseFormReturn<TFieldValues>> & FormElementProps;

export type FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>;

type FormItemLayout = LayoutProps extends infer Props
  ? Props extends unknown
    ? Omit<Props, 'autoFlow' | 'className' | 'display'>
    : never
  : never;

export type FormItemProps = React.ComponentPropsWithoutRef<'div'> &
  FormItemLayout & {
    description?: FormDescriptionProps['children'];
    label?: FormLabelProps['children'];
    required?: boolean;
  };

export type FormItemFieldProps =
  | { description?: undefined; label?: undefined; layout?: never }
  | ({ layout?: FormItemLayout } & (
      | (Pick<FormItemProps, 'description'> &
          Required<Pick<FormItemProps, 'label'>>)
      | (Pick<FormItemProps, 'label'> &
          Required<Pick<FormItemProps, 'description'>>)
    ));

export type FormLabelProps = React.ComponentPropsWithoutRef<'label'> & {
  /** Defaults to the item's or field's `required`. */
  required?: boolean;
};

export type FormControlProps = React.PropsWithChildren;

export type FormDescriptionProps = React.ComponentPropsWithoutRef<'p'>;

export type FormMessageProps = React.ComponentPropsWithoutRef<'p'>;
