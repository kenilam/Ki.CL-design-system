import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { InputGroupAddonProps } from 'design/components/input-group/spec';

// Constants
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

const CLASS_NAME = `${INPUT_GROUP}__addon`;

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, ...rest }, ref) => (
    <Layout alignItems='center' autoFlow='column' gap='narrowest' ref={ref}>
      <div
        className={classNames(CLASS_NAME, 'kicl-color-body-color', className)}
        {...rest}
      />
    </Layout>
  )
);

InputGroupAddon.displayName = 'InputGroupAddon';

export { InputGroupAddon };
