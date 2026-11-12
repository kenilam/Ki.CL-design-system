import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as SELECT } from 'design/components/select/constants';

// Context
import { useSelect } from 'design/components/select/context';

import type { SelectValueProps } from 'design/components/select/spec';

const CLASS_NAME = `${SELECT}__value`;

/**
 * `<selectedcontent>` copies the chosen option in. The placeholder is an
 * option too, so it goes on Select.
 */
const SelectValue: React.FunctionComponent<SelectValueProps> = ({
  className,
  ...rest
}) => {
  const { selectedContent } = useSelect();

  return React.createElement(
    'selectedcontent',
    {
      className: classNames(CLASS_NAME, 'kicl-text-truncate', className),
      ...rest,
    },
    selectedContent
  );
};

SelectValue.displayName = 'SelectValue';

export { SelectValue };
