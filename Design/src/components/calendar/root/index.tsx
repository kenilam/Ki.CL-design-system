import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME } from 'design/components/calendar/constants';

// Context
import { useCalendar } from 'design/components/calendar/context';

// Partials
import { Grid } from 'design/components/calendar/grid';
import { Header } from 'design/components/calendar/header';
import { Weekdays } from 'design/components/calendar/weekdays';

const Root: React.FunctionComponent<React.ComponentProps<'table'>> = ({
  className,
  ...rest
}) => {
  const { titleId } = useCalendar();

  return (
    <table
      className={classNames(CLASS_NAME, className)}
      {...rest}
      aria-labelledby={
        rest['aria-labelledby'] ?? (rest['aria-label'] ? undefined : titleId)
      }
    >
      <Header />
      <Weekdays />
      <Grid />
    </table>
  );
};

export { Root };
