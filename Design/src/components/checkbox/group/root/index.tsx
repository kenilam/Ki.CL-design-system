import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { CheckboxGroupProps } from 'design/components/checkbox/spec';

// Partials
import { Legend } from './legend';
import { SelectAll } from './select-all';

const CLASS_NAME = 'kicl--components--checkbox-group';

type Props = Omit<
  CheckboxGroupProps,
  'defaultValue' | 'name' | 'onValueChange' | 'value'
> &
  Pick<React.ComponentProps<'fieldset'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  children,
  className,
  legend,
  selectAll,
  ...rest
}) => {
  return (
    <Layout gap='narrower' justifyItems='start'>
      <fieldset className={classNames(CLASS_NAME, className)} {...rest}>
        {legend ? <Legend>{legend}</Legend> : null}
        {selectAll ? <SelectAll>{selectAll}</SelectAll> : null}
        {children}
      </fieldset>
    </Layout>
  );
};

export { Root };
