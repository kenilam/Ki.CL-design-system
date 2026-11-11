// Context
import {
  useDatePicker,
  useSelection,
} from 'design/components/date-picker/context';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { formatRange } from 'design/components/date-picker/helpers';

const useLabel = () => {
  const t = useCopy();
  const { formatDate } = useDatePicker();
  const selection = useSelection();

  if (selection.mode === 'range') {
    return formatRange(selection.selectedRange, formatDate, (from, to) => {
      return t('date_range', { from, to });
    });
  }

  return selection.selectedSingle ? formatDate(selection.selectedSingle) : null;
};

export { useLabel };
