import React from 'react';
import classNames from 'classnames';

import { Animation } from 'design/components/animation';
import { Layout } from 'design/components/layout';
import { Text } from 'design/components/text';

import { useFieldError, useFormItem } from './context';
import type { FormMessageProps } from './spec';
import * as Tb from 'react-icons/tb';

const CLASS_NAME = 'kicl--components--form__message';

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, name, ...rest }, ref) => {
    const item = useFormItem();
    const error = useFieldError(name);
    const body = error ? String(error.message ?? '') : children;

    if (!body) {
      return null;
    }

    const message = (
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
        <Tb.TbAlertCircle />
        {body}
      </Text>
    );

    return (
      <Layout
        alignItems='center'
        display='inline-grid'
        autoFlow='column'
        gap='narrow'
        justifyContent='start'
      >
        {name === 'root' ? (
          <Animation property='slide-from-top'>{message}</Animation>
        ) : (
          message
        )}
      </Layout>
    );
  }
);

FormMessage.displayName = 'FormMessage';

export { FormMessage };
