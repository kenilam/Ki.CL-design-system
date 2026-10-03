import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { PopoverTrigger } from '../../popover';
import * as Ri from 'react-icons/ri';

// Spec
import type { DatePickerTriggerProps } from '../spec';

// Styles
import '../../input/styles.scss';
import './styles.scss';

// Constants
import { CLASS_NAME as DATE_PICKER } from '../constants';

// Context
import { useDatePicker } from '../context';

const Trigger: React.FunctionComponent<DatePickerTriggerProps> = (props) => {
  const { disabled, label, placeholder } = useDatePicker();

  return (
    <PopoverTrigger
      {...props}
      disabled={disabled}
      className={classNames(
        'kicl--components--input',
        `${DATE_PICKER}__trigger`,
        'kicl-display-inline-flex',
        'kicl-font-size-small',
        'kicl-inline-size-full',
        'kicl-text-align-start'
      )}
    >
      <Ri.RiCalendarLine className={`${DATE_PICKER}__icon`} aria-hidden />
      <span className={label ? undefined : 'kicl-color-grey'}>
        {label ?? placeholder}
      </span>
    </PopoverTrigger>
  );
};

export { Trigger };
