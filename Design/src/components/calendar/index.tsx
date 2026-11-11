import React from 'react';

// Styles
import './styles.scss';

// Context
import { Provider } from './context';

// Partials
import { Root } from './root';

import type { CalendarProps } from './spec';

const Calendar = React.forwardRef<HTMLTableElement, CalendarProps>(
  (props, ref) => {
    const {
      className,
      defaultMonth: _defaultMonth,
      disabled: _disabled,
      mode: _mode,
      onSelect: _onSelect,
      selected: _selected,
      ...rest
    } = props;

    return (
      <Provider {...props}>
        <Root className={className} ref={ref} {...rest} />
      </Provider>
    );
  }
);

Calendar.displayName = 'Calendar';

export type {
  CalendarMode,
  CalendarProps,
  CalendarRangeProps,
  CalendarSingleProps,
  DateRange,
} from './spec';
export { Calendar };
