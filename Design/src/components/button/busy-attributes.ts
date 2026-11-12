// Spec
import type * as Spec from './spec';

const preventClick: Spec.Props['onClick'] = (event) => {
  event.preventDefault();
};

const getBusyAttributes = ({
  busy,
  onClick,
}: Pick<Spec.Props, 'busy' | 'onClick'>) => {
  if (!busy) {
    return { onClick };
  }

  return {
    'aria-busy': true,
    'aria-disabled': true,
    onClick: preventClick,
  };
};

export { getBusyAttributes };
