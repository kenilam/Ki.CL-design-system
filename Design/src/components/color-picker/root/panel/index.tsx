import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { PopoverContent } from 'design/components/popover';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';

const Panel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const { control, variant } = useColorPicker();

  return (
    <PopoverContent
      aria-labelledby={control.id}
      className={classNames(
        `${CLASS_NAME}__panel`,
        'kicl-inline-size-columns-3'
      )}
      variant={variant}
    >
      {children}
    </PopoverContent>
  );
};

export { Panel };
