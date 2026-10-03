import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from '../../layout';

// Spec
import type { InputGroupAddonProps } from '../spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as INPUT_GROUP } from '../constants';

const CLASS_NAME = `${INPUT_GROUP}__addon`;

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ align = 'inline-start', className, ...rest }, ref) => (
    <Layout alignItems='center' autoFlow='column' gap='narrowest' ref={ref}>
      <div
        data-slot='input-group-addon'
        data-align={align}
        className={classNames(CLASS_NAME, `${CLASS_NAME}--${align}`, className)}
        {...rest}
      />
    </Layout>
  )
);

InputGroupAddon.displayName = 'InputGroupAddon';

export { InputGroupAddon };
