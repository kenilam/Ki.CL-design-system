// Spec
import type { Edge } from 'design/components/diagram/spec';

export const roundedPath = (points: Edge['points'], radius = 10): string => {
  if (points.length < 2) {
    return '';
  }

  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 1; i < points.length - 1; i += 1) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    const a = [x1 - x0, y1 - y0];
    const b = [x2 - x1, y2 - y1];
    const la = Math.hypot(a[0], a[1]) || 1;
    const lb = Math.hypot(b[0], b[1]) || 1;
    const ra = Math.min(radius, la / 2);
    const rb = Math.min(radius, lb / 2);

    d += ` L ${x1 - (a[0] / la) * ra} ${y1 - (a[1] / la) * ra}`;
    d += ` Q ${x1} ${y1} ${x1 + (b[0] / lb) * rb} ${y1 + (b[1] / lb) * rb}`;
  }

  const [x, y] = points[points.length - 1];

  return `${d} L ${x} ${y}`;
};
