import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from '../../button';

// Spec
import type { InputGroupButtonProps } from '../spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as INPUT_GROUP } from '../constants';

const CLASS_NAME = `${INPUT_GROUP}__button`;

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(({ className, variant = 'ghost', ...rest }, ref) => (
  <Button
    {...rest}
    {...(variant === 'ghost'
      ? ({ unstyled: true } as const)
      : ({ size: 'small' } as const))}
    className={classNames(CLASS_NAME, className)}
    ref={ref}
  />
));

InputGroupButton.displayName = 'InputGroupButton';

export { InputGroupButton };
