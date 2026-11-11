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
    // `interestfor` isn't in React's DOM types yet, so it's passed as written.
    ...(parts.hint
      ? {
          'aria-describedby': `${id}__hint`,
          interestfor: `${id}__hint`,
        }
      : null),
  };
};

export { useAttributes };
