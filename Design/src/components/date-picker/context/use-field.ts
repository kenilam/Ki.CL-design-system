// Components
import { useFormItemControl } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { defaultFormatDate } from 'design/components/date-picker/helpers';

// Spec
import type { DatePickerProps } from 'design/components/date-picker/spec';

const useField = (picker: DatePickerProps) => {
  const t = useCopy();
  const {
    className,
    disabled,
    formatDate = defaultFormatDate,
    id,
    mode = 'single',
    placeholder = t(
      mode === 'range' ? 'placeholder_date_range' : 'placeholder_date'
    ),
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    variant,
  } = picker;

  const control = useFormItemControl({
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    id,
  });

  return {
    disabled,
    formatDate,
    placeholder,
    trigger: {
      'aria-describedby': control['aria-describedby'],
      'aria-invalid': control['aria-invalid'],
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      className,
      id: control.id,
    },
    variant,
  };
};

export { useField };
