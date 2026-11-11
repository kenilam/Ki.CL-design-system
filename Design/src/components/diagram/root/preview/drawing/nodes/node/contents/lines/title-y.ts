// Constants
import { CYLINDER_EDGE } from 'design/components/diagram/constants';

// Spec
import type { Node } from 'design/components/diagram/spec';

export const LINE_SIZE = 16;

export const titleYOf = ({ h, lines, shape, y }: Node) => {
  const offset = shape === 'cylinder' ? CYLINDER_EDGE : 0;
  const middle = y + offset + (h - offset) / 2;

  return lines?.length ? middle - (lines.length * LINE_SIZE) / 2 : middle + 5;
};
