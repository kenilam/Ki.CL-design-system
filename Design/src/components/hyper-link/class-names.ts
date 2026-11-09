// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Kept out of the component file because Fast Refresh only hot-swaps files
// that export nothing but components.
const CLASS_NAME = 'kicl--components--hyper-link';

const getHyperLinkClassNames = ({
  block,
  className,
  unstyled = false,
}: Spec.GetHyperLinkClassNamesProps = {}) => {
  return classNames(
    CLASS_NAME,
    {
      [`${CLASS_NAME}--unstyled`]: unstyled,
      'kicl-border-radius-sm': block,
    },
    className
  );
};

export { CLASS_NAME, getHyperLinkClassNames };
