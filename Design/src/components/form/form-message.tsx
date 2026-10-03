import React from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { Layout } from '../layout';
import { Text } from '../text';

import { useFormFieldContext } from './context';
import type { FormMessageProps } from './spec';
import * as Ri from 'react-icons/ri';

const CLASS_NAME = 'kicl--components--form__message';

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...rest }, ref) => {
    const { formMessageId, name } = useFormFieldContext();
    const { getFieldState, formState } = useFormContext();
    const { error } = getFieldState(name, formState);
    const body = error ? String(error.message ?? '') : children;

    if (!body) {
      return null;
    }

    return (
      <Layout
        alignItems='center'
        display='inline-grid'
        autoFlow='column'
        gap='narrow'
        justifyContent='start'
      >
        <Text
          {...rest}
          ref={ref}
          is='p'
          id={formMessageId}
          className={classNames(
            CLASS_NAME,
            'kicl-font-size-small',
            'kicl-color-error',
            className
          )}
          role={error ? 'alert' : undefined}
        >
          <Ri.RiErrorWarningLine />
          {body}
        </Text>
      </Layout>
    );
  }
);

FormMessage.displayName = 'FormMessage';

export { FormMessage };
