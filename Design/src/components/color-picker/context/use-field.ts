// Components
import { useFormItemControl } from 'design/components';

// Spec
import type { ColorPickerProps } from 'design/components/color-picker/spec';

// Partials
import { useColor } from './use-color';

const useField = (picker: ColorPickerProps) => {
  const {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
    copyable,
    defaultValue,
    disabled,
    id,
    onValueChange,
    presentation = 'popover',
    value,
    variant,
  } = picker;

  const control = useFormItemControl({
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    id,
  });

  return {
    className,
    color: useColor({ defaultValue, onValueChange, value }),
    copyable,
    control: {
      'aria-describedby': control['aria-describedby'],
      'aria-invalid': control['aria-invalid'],
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      id: control.id,
    },
    disabled,
    presentation,
    variant,
  };
};

export { useField };
