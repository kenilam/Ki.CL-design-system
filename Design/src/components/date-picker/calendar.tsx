import React from 'react';

// Components
import { Calendar as MonthGrid } from 'design/components/calendar';

// Context
import { useDatePicker } from './context';

const Calendar: React.FunctionComponent = () => {
  const { mode, onSelectRange, onSelectSingle, selectedRange, selectedSingle } =
    useDatePicker();

  return mode === 'range' ? (
    <MonthGrid
      className='kicl-inline-size-full'
      mode='range'
      selected={selectedRange}
      onSelect={onSelectRange}
    />
  ) : (
    <MonthGrid
      className='kicl-inline-size-full'
      mode='single'
      selected={selectedSingle}
      onSelect={onSelectSingle}
    />
  );
};

export { Calendar };
