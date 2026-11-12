// Libraries
import classNames from 'classnames';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Spec
import type { DiagramState } from 'design/components/diagram/spec';

// Partials
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

const useBoxClassName = () => {
  const { state } = useDiagram();
  const { id } = useNode();

  let modifier: keyof DiagramState | undefined;

  if (id && state?.active?.includes(id)) {
    modifier = 'active';
  }

  if (id && state?.failed?.includes(id)) {
    modifier = 'failed';
  }

  return classNames(`${BASE}-box`, {
    [`${BASE}-box--${modifier}`]: modifier,
  });
};

export { useBoxClassName };
