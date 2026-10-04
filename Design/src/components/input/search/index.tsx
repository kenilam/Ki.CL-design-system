import React, { useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { InputGroupButton } from '../../input-group';
import { Input } from '..';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from '..';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--input--search';

type Props = Omit<InputProps, 'type'>;

/**
 * A search field with a button that clears it. The button only shows while
 * there's text, which CSS reads from the placeholder, so one is always set.
 * Clearing goes through the input's own change event, so a controlled field's
 * `onChange` hears it.
 */
const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  ({ before, className, placeholder = 'Search', ...rest }, ref) => {
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
      <Input
        {...rest}
        after={
          <InputGroupButton
            aria-label='Clear'
            className={`${CLASS_NAME}__clear`}
            onClick={clear}
            size='icon-xs'
            type='button'
          >
            <Ri.RiCloseLine aria-hidden />
          </InputGroupButton>
        }
        before={before ?? <Ri.RiSearchLine aria-hidden />}
        className={classNames(CLASS_NAME, className)}
        placeholder={placeholder}
        ref={(element) => {
          node.current = element;

          if (typeof ref === 'function') {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        type='search'
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
