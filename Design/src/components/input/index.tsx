import React from 'react';

// Components
import { FormItem } from 'design/components/form';

// Constants
import { INPUT_GROUP_CLASS_NAME as INPUT_GROUP } from 'design/components';

import type { Props } from './spec';

import './styles.scss';
import './styles.file.scss';

// Partials
import { Control } from './control';
import { Group } from './group';

/**
 * With `before` or `after`, `className` and `style` go to the wrapping label
 * and every other prop to the `<input>`.
 */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <Input {...props} ref={ref} />
        </FormItem>
      );
    }

    const { after, before, className, style, ...rest } = props;

    if (!before && !after) {
      return <Control {...props} ref={ref} />;
    }

    return (
      <Group after={after} before={before} className={className} style={style}>
        <Control {...rest} className={`${INPUT_GROUP}__control`} ref={ref} />
      </Group>
    );
  }
);

Input.displayName = 'Input';

export type { Props as InputProps } from './spec';
export { Input };
