// Context
import {
  usePopoverIds,
  usePopoverOpen,
  usePopoverParts,
} from 'design/components/popover/context';

const useAttributes = () => {
  const { id } = usePopoverIds();
  const { open } = usePopoverOpen();
  const parts = usePopoverParts();

  return {
    ...(parts.content
      ? {
          'aria-expanded': open,
          'aria-haspopup': 'dialog' as const,
        }
      : null),
    id: `${id}__trigger`,
    ...(parts.hint === 'description'
      ? { 'aria-describedby': `${id}__hint` }
      : null),
  };
};

export { useAttributes };
