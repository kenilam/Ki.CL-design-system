import React from 'react';
import classNames from 'classnames';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--table';

const Table = React.forwardRef<HTMLTableElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <table
        {...rest}
        className={classNames(CLASS_NAME, className)}
        ref={ref}
      />
    );
  }
);

Table.displayName = 'Table';

export type { Props as TableProps } from './spec';
export { Table };
