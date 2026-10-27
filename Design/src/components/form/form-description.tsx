import React from 'react';
import classNames from 'classnames';

import { Text } from 'design/components/text';

import { useFormFieldContext } from './context';
import type { FormDescriptionProps } from './spec';

const CLASS_NAME = 'kicl--components--form__description';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...rest }, ref) => {
  const { formDescriptionId } = useFormFieldContext();

  // No paragraph with nothing in it.
  if (!rest.children) {
    return null;
  }

  return (
    <Text
      {...rest}
      ref={ref}
      is='p'
      id={formDescriptionId}
      className={classNames(
        CLASS_NAME,
        'kicl-font-size-smaller',
        'kicl-color-grey-700',
        className
      )}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export { FormDescription };
