// Constants
import { TITLE_SIZE } from 'design/components/diagram/root/preview/drawing/nodes/node/contents/constants';
import { ROW_SIZE } from './constants';

// Context
import { useNode } from 'design/components/diagram/root/preview/drawing/nodes/node/context';

const useRow = (name: string) => {
  const { rows = [], w, x, y } = useNode();
  const index = rows.findIndex((row) => {
    return row.name === name;
  });
  const row = index < 0 ? undefined : rows[index];
  const top = y + TITLE_SIZE + index * ROW_SIZE;

  return { baseline: top + 16, index, row, top, w, x };
};

export { useRow };
