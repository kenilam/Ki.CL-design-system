import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';
import { PopoverTrigger } from 'design/components/popover';
import * as Tb from 'react-icons/tb';

// Styles
import './styles.scss';

// Constants
import { INPUT_CLASS_NAME } from 'design/components';
import { CLASS_NAME as DATE_PICKER } from 'design/components/date-picker/constants';

// Context
import { useDatePicker } from 'design/components/date-picker/context';

// Partials
import { useLabel } from './use-label';

const Trigger: React.FunctionComponent = () => {
  const {
    disabled,
    placeholder,
    trigger: { className, ...props },
  } = useDatePicker();
  const label = useLabel();

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
          INPUT_CLASS_NAME,
          `${DATE_PICKER}__trigger`,
          'kicl-font-size-small',
          'kicl-inline-size-auto',
          'kicl-line-height',
          'kicl-text-align-start',
          className
        )}
      >
        <Tb.TbCalendar className={`${DATE_PICKER}__icon`} aria-hidden />
        <span className={label ? undefined : 'kicl-color-grey'}>
          {label ?? placeholder}
        </span>
      </PopoverTrigger>
    </Layout>
  );
};

export { Trigger };
