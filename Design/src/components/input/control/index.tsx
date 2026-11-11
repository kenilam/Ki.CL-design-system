import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { useFormItemControl } from 'design/components';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { Props as InputProps } from 'design/components/input/spec';

// Constants
import { CLASS_NAME } from 'design/components/input/constants';

type Props = Omit<InputProps, keyof FormItemFieldProps> &
  Pick<React.ComponentProps<'input'>, 'ref'>;

const Control: React.FunctionComponent<Props> = ({
  after: _after,
  before: _before,
  className,
  ref,
  style,
  type = 'text',
  ...rest
}) => {
  const control = useFormItemControl(rest);

  return (
    <input
      ref={ref}
      type={type}
      className={classNames(
        CLASS_NAME,
        'kicl-font-size-small',
        'kicl-overflow-hidden',
        'kicl-text-nowrap',
        className
      )}
      style={style}
      {...rest}
      {...control}
    />
  );
};

export { Control };
