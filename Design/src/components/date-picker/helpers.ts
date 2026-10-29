import type { DateRange } from 'design/components/calendar';

export const defaultFormatDate = (date: Date) => {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatRange = (
  range: DateRange | undefined,
  formatDate: (date: Date) => string,
  join: (from: string, to: string) => string
) => {
  if (!range?.from) {
    return null;
  }
  if (!range.to || range.from.getTime() === range.to.getTime()) {
    return formatDate(range.from);
  }
  return join(formatDate(range.from), formatDate(range.to));
};
