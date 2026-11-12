import React from 'react';

// Libraries
import classNames from 'classnames';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as RADIO_GROUP } from 'design/components/radio-group/constants';

// Context
import { useRadioGroup } from 'design/components/radio-group/context';

const CLASS_NAME = `${RADIO_GROUP}__legend`;

const Legend: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  const { required } = useRadioGroup();

  return (
    <legend
      className={classNames(
        CLASS_NAME,
        { [`${CLASS_NAME}--required`]: required },
        'kicl-margin-block-end-narrower'
      )}
    >
      {children}
    </legend>
  );
};

export { Legend };
