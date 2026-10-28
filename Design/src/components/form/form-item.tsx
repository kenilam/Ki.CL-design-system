import React, { useId } from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';

import { FormItemContext } from './context';
import { FormDescription } from './form-description';
import { FormLabel } from './form-label';
import { FormMessage } from './form-message';
import type { FormItemProps } from './spec';

const CLASS_NAME = 'kicl--components--form__item';

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      children,
      className,
      description,
      gap = 'narrowest',
      label,
      required,
      ...rest
    },
    ref
  ) => {
    const id = useId();

    return (
      <FormItemContext.Provider
        value={{
          descriptionId:
            label && !description ? undefined : `${id}-description`,
          id,
          messageId: `${id}-message`,
          required,
        }}
      >
        <Layout {...rest} gap={gap}>
          <div ref={ref} className={classNames(CLASS_NAME, className)}>
            <FormLabel>{label}</FormLabel>
            {children}
            <FormDescription>{description}</FormDescription>
            {label || description ? <FormMessage /> : null}
          </div>
        </Layout>
      </FormItemContext.Provider>
    );
  }
);

FormItem.displayName = 'FormItem';

export { FormItem };
