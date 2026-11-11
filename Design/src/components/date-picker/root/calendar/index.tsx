import React from 'react';

// Components
import { Calendar as MonthGrid } from 'design/components/calendar';

// Context
import { useSelection } from 'design/components/date-picker/context';

const Calendar: React.FunctionComponent = () => {
  const selection = useSelection();

  return selection.mode === 'range' ? (
    <MonthGrid
      className='kicl-inline-size-full'
      mode='range'
      selected={selection.selectedRange}
      onSelect={selection.onSelectRange}
    />
  ) : (
    <MonthGrid
      className='kicl-inline-size-full'
      mode='single'
      selected={selection.selectedSingle}
      onSelect={selection.onSelectSingle}
    />
  );
};

export { Calendar };
