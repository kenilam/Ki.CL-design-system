// Spec
import type { Node } from 'design/components/diagram/spec';

const positionOf = ({ x, y }: Pick<Node, 'x' | 'y'>) => {
  return `${x},${y}`;
};

export { positionOf };
