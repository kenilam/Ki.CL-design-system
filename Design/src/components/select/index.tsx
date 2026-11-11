import React from 'react';

// Components
import { FormItem } from 'design/components/form';

// Styles
import './styles.scss';

// Partials
import { Root } from './root';

import type { SelectProps } from './spec';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <Root {...props} ref={ref} />
        </FormItem>
      );
    }

    return <Root {...props} ref={ref} />;
  }
);

Select.displayName = 'Select';

export type {
  SelectContentProps,
  SelectGroupProps,
  SelectItemProps,
  SelectLabelProps,
  SelectProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps,
} from './spec';

export { SelectContent } from './content';
export { SelectGroup } from './group';
export { SelectItem } from './item';
export { SelectLabel } from './label';
export { SelectSeparator } from './separator';
export { SelectTrigger } from './trigger';
export { SelectValue } from './value';
export { Select };
