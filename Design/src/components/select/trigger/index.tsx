import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';
import * as Ri from 'react-icons/ri';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

import type { SelectTriggerProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__trigger`;

/**
 * Browsers without base-select ignore this button. The `<select>` owns focus,
 * opening and keys.
 */
const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Layout
        alignItems='center'
        display='flex'
        gap='narrower'
        justifyContent='space-between'
      >
        <button
          ref={ref}
          className={classNames(
            CLASS_NAME,
            'kicl-inline-size-full',
            // An input's line height, so both fields are the same height.
            'kicl-line-height',
            'kicl-text-align-start',
            className
          )}
          {...rest}
        >
          {children}
          <Ri.RiArrowDownSLine className={`${SELECT}__icon`} aria-hidden />
        </button>
      </Layout>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';

export { SelectTrigger };
