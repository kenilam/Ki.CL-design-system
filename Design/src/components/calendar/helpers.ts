import type { CalendarProps, DateRange } from './spec';

export const startOfDay = (date: Date) => {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
};

export const sameDay = (a?: Date, b?: Date) => {
  if (!a || !b) {
    return false;
  }
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

export const isBefore = (a: Date, b: Date) => {
  return a.getTime() < b.getTime();
};

export const nextRange = (date: Date, current?: DateRange): DateRange => {
  if (!current?.from || current.to) {
    return { from: date, to: undefined };
  }
  if (sameDay(current.from, date)) {
    return { from: date, to: date };
  }
  if (isBefore(date, current.from)) {
    return { from: date, to: current.from };
  }
  return { from: current.from, to: date };
};

export const isInRange = (date: Date, range?: DateRange) => {
  if (!range?.from || !range.to) {
    return false;
  }
  const time = date.getTime();
  const from = startOfDay(range.from).getTime();
  const to = startOfDay(range.to).getTime();
  return time > from && time < to;
};

export const monthLabel = (date: Date) => {
  return date.toLocaleString(undefined, {
    month: 'long',
    year: 'numeric',
  });
};

export const seedMonth = (props: CalendarProps) => {
  if (props.defaultMonth) {
    return props.defaultMonth;
  }
  if (props.mode === 'range') {
    return props.selected?.from ?? props.selected?.to ?? new Date();
  }
  return props.selected ?? new Date();
};

export const dayLabel = (date: Date) => {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// 7 January 2024 was a Sunday, so this starts on Sunday like the grid.
export const weekdays = () => {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(2024, 0, 7 + index);
    return {
      long: date.toLocaleDateString(undefined, { weekday: 'long' }),
      short: date.toLocaleDateString(undefined, { weekday: 'short' }),
    };
  });
};
