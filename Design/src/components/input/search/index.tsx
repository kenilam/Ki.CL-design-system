import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components/input-group';

// Helpers
import { mergeRefs } from 'design/helper';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--input--search';

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
    const node = useRef<HTMLInputElement | null>(null);

    const clear = () => {
      const element = node.current;

      if (!element) {
        return;
      }

      // React only hears a change made through the native setter.
      Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      )?.set?.call(element, '');
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.focus();
    };

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
        {before ?? <Ri.RiSearchLine aria-hidden />}
        <InputGroupInput
          {...rest}
          {...control}
          placeholder={placeholder ?? t('search')}
          ref={mergeRefs(node, ref)}
          type='search'
        />
        <InputGroupButton
          aria-label={t('action_clear')}
          className={`${CLASS_NAME}__clear`}
          onClick={clear}
          type='button'
        >
          <Ri.RiCloseLine aria-hidden />
        </InputGroupButton>
      </InputGroup>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
