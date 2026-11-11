// Spec
import type { Edge } from 'design/components/diagram/spec';

const endsOf = ({ points }: Pick<Edge, 'points'>) => {
  return `${points[0]}-${points[points.length - 1]}`;
};

export { endsOf };
