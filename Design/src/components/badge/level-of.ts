// Spec
import type { Props } from './spec';

const levelOf = ({
  level,
  limit,
  remaining,
}: Pick<Props, 'level' | 'limit' | 'remaining'>) => {
  if (level || limit === undefined || remaining === undefined) {
    return level;
  }

  if (remaining <= 1) {
    return 'error';
  }

  if (remaining <= limit / 2) {
    return 'warning';
  }

  return 'confirm';
};

export { levelOf };
