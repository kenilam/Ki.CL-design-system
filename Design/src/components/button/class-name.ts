// Components
import { getHyperLinkClassNames } from 'design/components';

// Spec
import type * as Spec from './spec';

// Class names
import { getButtonClassNames, hasText } from './class-names';

const getClassName = ({
  after,
  before,
  block,
  children,
  className,
  disabled,
  iconOnlyUpTo,
  level,
  lookLikeHyperLink,
  size,
  unstyled,
  variant,
}: Spec.Props) => {
  if (lookLikeHyperLink) {
    return getHyperLinkClassNames({ block, className, unstyled });
  }

  return getButtonClassNames({
    block,
    className,
    disabled,
    icon: !hasText(before, children, after),
    iconOnlyUpTo,
    level,
    size,
    unstyled,
    variant,
  });
};

export { getClassName };
