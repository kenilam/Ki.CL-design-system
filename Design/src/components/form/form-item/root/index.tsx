import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';
import { FormDescription } from 'design/components/form/form-description';
import { FormLabel } from 'design/components/form/form-label';
import { FormMessage } from 'design/components/form/form-message';

// Spec
import type { FormItemProps } from 'design/components/form/spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--form__item';

const Root: React.FunctionComponent<
  FormItemProps & Pick<React.ComponentProps<'div'>, 'ref'>
> = ({ children, className, description, gap, label, ref, ...rest }) => {
  return (
    <Layout {...rest} gap={gap}>
      <div ref={ref} className={classNames(CLASS_NAME, className)}>
        <FormLabel>{label}</FormLabel>
        {children}
        <FormDescription>{description}</FormDescription>
        {label || description ? <FormMessage /> : null}
      </div>
    </Layout>
  );
};

export { Root };
