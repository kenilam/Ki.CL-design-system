import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { NameHint } from 'design/components';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/select/constants';

// Partials
import { Placeholder } from 'design/components/select/root/placeholder';
import { Face } from './face';
import { Options } from './options';
import { useControl } from './use-control';

import type { Props } from 'design/components/select/root';

const Auto: React.FunctionComponent<Props> = ({
  children,
  className,
  inline,
  placement,
  ...rest
}) => {
  const control = useControl(rest);

  return (
    <span
      className={classNames(
        CLASS_NAME,
        'kicl-display-inline-flex',
        'kicl-inline-size-fit',
        'kicl-position-relative',
        {
          [`${CLASS_NAME}--inline`]: inline,
          'kicl-font-size-small': !inline,
        },
        className
      )}
    >
      <Face>{children}</Face>
      <NameHint label={rest['aria-label']}>
        <select {...control}>
          <Options>{children}</Options>
          {rest.placeholder !== undefined ? (
            <Placeholder>{rest.placeholder}</Placeholder>
          ) : null}
        </select>
      </NameHint>
    </span>
  );
};

export { Auto };
