import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components';
import { InputGroup, InputGroupInput } from 'design/components/input-group';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

// Partials
import { Clear } from './clear';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

type Props = Omit<InputProps, 'after' | 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps;

/**
 * The clear button hides with `:placeholder-shown`, which needs a placeholder,
 * so one is always set.
 */
const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const { before, className, disabled, placeholder, style, ...rest } = props;
    const control = useFormItemControl(props);
    const t = useCopy();

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <SearchInput {...props} ref={ref} />
        </FormItem>
      );
    }

    return (
      <InputGroup
        className={classNames(CLASS_NAME, className)}
        disabled={disabled}
        style={style}
      >
        {before ?? <Tb.TbSearch aria-hidden />}
        <InputGroupInput
          {...rest}
          {...control}
          placeholder={placeholder ?? t('search')}
          ref={ref}
          type='search'
        />
        <Clear />
      </InputGroup>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
