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
 * The `<button>` a base-select draws as its face. The `<select>` owns focus,
 * opening and keys; browsers without base-select ignore this element.
 */
const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...rest }, ref) => (
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
          // The line an input's text sits on, so the two fields are one height.
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
  )
);

SelectTrigger.displayName = 'SelectTrigger';

export { SelectTrigger };
