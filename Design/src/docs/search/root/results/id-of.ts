// Spec
import type { Entry } from 'design/docs/search/spec';

const idOf = ({ name, path }: Pick<Entry, 'name' | 'path'>) => {
  return `${name}:${path}`;
};

export { idOf };
