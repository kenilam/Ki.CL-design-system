// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

/*
 * Kept out of the component's file: React Fast Refresh only hot-swaps a
 * file that exports nothing but components.
 */
const CLASS_NAME = 'kicl--components--button';

const getButtonClassNames = ({
  bold,
  className = '',
  disabled,
  level,
  size,
  unstyled,
  variant = 'primary',
}: Spec.GetButtonClassNamesProps = {}) => {
  return classNames(
    CLASS_NAME,
    {
      [`${CLASS_NAME}--bold`]: !unstyled && bold,
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--size--${size}`]: !unstyled && size,
      [`${CLASS_NAME}--level--${level}`]: !unstyled && level,
      [`${CLASS_NAME}--variant--${variant}`]: !unstyled && variant,
      [`${CLASS_NAME}--unstyled`]: unstyled,
      'kicl-line-height-narrower': !unstyled,
      'kicl-text-transform-uppercase': !unstyled,
    },
    className
  );
};

export { CLASS_NAME, getButtonClassNames };
