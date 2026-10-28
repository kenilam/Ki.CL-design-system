import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { FormDescription, FormLabel } from 'design/components/form';
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
import type { InputProps } from 'design/components/input';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--input--search';

type Props = Omit<InputProps, 'after' | 'type'>;

/**
 * A search field with a button that clears it. The button only shows while
 * there's text, which CSS reads from the placeholder, so one is always set.
 * Clearing goes through the input's own change event, so a controlled field's
 * `onChange` hears it.
 */
const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      before,
      className,
      description,
      disabled,
      label,
      placeholder,
      style,
      ...rest
    },
    ref
  ) => {
    const control = useFormItemControl({ description, ...rest });
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

    return (
      <>
        <FormLabel htmlFor={control.id} required={rest.required}>
          {label}
        </FormLabel>
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
        <FormDescription>{description}</FormDescription>
      </>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
