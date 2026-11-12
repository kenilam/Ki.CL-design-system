import { useId } from 'react';

// Spec
import type { Props } from 'design/components/details/spec';

// Context
import { useClicked } from 'design/components/details/context';

// Partials
import { group } from './group';
import { reveal } from './reveal';

const useToggle = (onToggle: Props['onToggle']) => {
  const { clicked } = useClicked();
  const name = useId();

  const toggle: Props['onToggle'] = (event) => {
    onToggle?.(event);

    if (clicked() && event.currentTarget.open) {
      group(event.currentTarget, name);
      reveal(event.currentTarget);
    }
  };

  return toggle;
};

export { useToggle };
