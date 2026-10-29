import React, { useContext } from 'react';
import classNames from 'classnames';

import { Text } from 'design/components/text';

import { FormItemContext } from './context';
import type { FormDescriptionProps } from './spec';

const CLASS_NAME = 'kicl--components--form__description';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...rest }, ref) => {
  const item = useContext(FormItemContext);

  if (!rest.children) {
    return null;
  }

  return (
    <Text
      id={item?.descriptionId}
      {...rest}
      ref={ref}
      is='p'
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
