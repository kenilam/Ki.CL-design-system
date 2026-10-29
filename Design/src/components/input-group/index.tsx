import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { InputGroupIs, InputGroupProps } from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Partials
import { InputGroupButton } from './button';
import { InputGroupInput } from './input';
import { InputGroupTextarea } from './textarea';

/**
 * Input with what sits inside its border: icons, text and buttons, each a
 * direct child.
 */
const InputGroup = React.forwardRef<HTMLElement, InputGroupProps>(
  ({ children, className, is = 'fieldset', ...rest }, ref) => {
    const Component = is as InputGroupIs;

    return (
      <Layout alignItems='center' display='flex' gap='narrow' ref={ref}>
        <Component
          {...(rest as React.HTMLAttributes<HTMLElement>)}
          className={classNames(
            CLASS_NAME,
            'kicl-color-body-color',
            'kicl-inline-size-full',
            className
          )}
        >
          {children}
        </Component>
      </Layout>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export type {
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupIs,
  InputGroupProps,
  InputGroupTextareaProps,
} from './spec';

export {
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  InputGroup,
};
