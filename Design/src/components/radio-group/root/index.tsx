import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { RadioGroupProps } from 'design/components/radio-group/spec';

// Constants
import { CLASS_NAME } from 'design/components/radio-group/constants';

// Partials
import { Legend } from 'design/components/radio-group/legend';

type Props = Omit<
  RadioGroupProps,
  'defaultValue' | 'name' | 'onValueChange' | 'required' | 'value'
> &
  Pick<React.ComponentProps<'fieldset'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  children,
  className,
  legend,
  ...rest
}) => {
  return (
    <Layout gap='narrower' justifyItems='start'>
      <fieldset
        className={classNames(CLASS_NAME, className)}
        role='radiogroup'
        {...rest}
      >
        {legend ? <Legend>{legend}</Legend> : null}
        {children}
      </fieldset>
    </Layout>
  );
};

export { Root };
