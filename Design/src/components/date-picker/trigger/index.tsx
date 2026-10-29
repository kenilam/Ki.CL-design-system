import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';
import { PopoverTrigger } from 'design/components/popover';
import * as Ri from 'react-icons/ri';

// Spec
import type { DatePickerTriggerProps } from 'design/components/date-picker/spec';

// Styles
import 'design/components/input/styles.scss';
import './styles.scss';

// Constants
import { CLASS_NAME as DATE_PICKER } from 'design/components/date-picker/constants';

// Context
import { useDatePicker } from 'design/components/date-picker/context';

const Trigger: React.FunctionComponent<DatePickerTriggerProps> = ({
  className,
  ...props
}) => {
  const { disabled, label, placeholder } = useDatePicker();

  return (
    <Layout
      alignItems='center'
      display='flex'
      gap='narrower'
      justifyContent='start'
    >
      <PopoverTrigger
        {...props}
        disabled={disabled}
        className={classNames(
          'kicl--components--input',
          `${DATE_PICKER}__trigger`,
          'kicl-font-size-small',
          'kicl-inline-size-auto',
          'kicl-line-height',
          'kicl-text-align-start',
          className
        )}
      >
        <Ri.RiCalendarLine className={`${DATE_PICKER}__icon`} aria-hidden />
        <span className={label ? undefined : 'kicl-color-grey'}>
          {label ?? placeholder}
        </span>
      </PopoverTrigger>
    </Layout>
  );
};

export { Trigger };
