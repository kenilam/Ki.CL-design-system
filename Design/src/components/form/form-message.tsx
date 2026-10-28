import React, { useContext } from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';
import { Text } from 'design/components/text';

import { FormItemContext, useFieldError } from './context';
import type { FormMessageProps } from './spec';
import * as Ri from 'react-icons/ri';

const CLASS_NAME = 'kicl--components--form__message';

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...rest }, ref) => {
    const item = useContext(FormItemContext);
    const error = useFieldError();
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
          id={item?.messageId}
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
