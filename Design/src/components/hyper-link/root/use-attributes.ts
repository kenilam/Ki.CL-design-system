// Components
import {
  getButtonClassNames,
  hasButtonText as hasText,
} from 'design/components';

// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Class names
import { getHyperLinkClassNames } from 'design/components/hyper-link/class-names';

// Context
import { useHyperLink } from 'design/components/hyper-link/context';

type Props = Omit<
  Spec.Props,
  | 'after'
  | 'before'
  | 'children'
  | 'end'
  | 'frames'
  | 'justifyContent'
  | 'lookLikeButton'
  | 'target'
  | 'to'
>;

const useAttributes = ({
  block,
  className: _className = '',
  disabled,
  level,
  onClick: clickHandler,
  size,
  unstyled,
  variant,
  ...rest
}: Props) => {
  const hyperLink = useHyperLink();

  const onClick: Spec.Props['onClick'] = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    clickHandler?.(event);
  };

  const className = hyperLink.lookLikeButton
    ? getButtonClassNames({
        block,
        className: _className,
        disabled,
        icon: !hasText(hyperLink.before, hyperLink.children, hyperLink.after),
        level,
        size,
        variant,
      })
    : getHyperLinkClassNames({ block, className: _className, unstyled });

  return {
    rest,
    shared: {
      'aria-disabled': disabled,
      className,
      onClick,
      tabIndex: disabled ? -1 : undefined,
      target: hyperLink.target,
    },
  };
};

export { useAttributes };
