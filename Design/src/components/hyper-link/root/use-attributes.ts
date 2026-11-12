// Components
import { getButtonClassNames } from 'design/components';

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
  disabled: _disabled,
  level,
  onClick: clickHandler,
  size,
  unstyled,
  variant,
  ...rest
}: Props) => {
  const hyperLink = useHyperLink();
  const disabled = _disabled || hyperLink.busy;

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
        icon: hyperLink.isIcon,
        iconOnlyUpTo: hyperLink.iconOnlyUpTo,
        level,
        size,
        variant,
      })
    : getHyperLinkClassNames({
        block,
        className: _className,
        unstyled,
        withLine: hyperLink.hasLine,
      });

  return {
    rest,
    shared: {
      'aria-busy': hyperLink.busy,
      'aria-disabled': disabled,
      className,
      onClick,
      tabIndex: disabled ? -1 : undefined,
      target: hyperLink.target,
    },
  };
};

export { useAttributes };
