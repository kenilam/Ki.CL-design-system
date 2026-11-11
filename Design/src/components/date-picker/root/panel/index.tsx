import React from 'react';

// Components
import { PopoverContent } from 'design/components/popover';

// Context
import { useDatePicker } from 'design/components/date-picker/context';

// Partials
import { Calendar } from 'design/components/date-picker/root/calendar';

// Constants
import { CLASS_NAME } from 'design/components/date-picker/constants';

const Panel: React.FunctionComponent = () => {
  const { trigger, variant } = useDatePicker();

  return (
    <PopoverContent
      aria-labelledby={trigger.id}
      className={`${CLASS_NAME}__panel`}
      variant={variant}
    >
      <Calendar />
    </PopoverContent>
  );
};

export { Panel };
