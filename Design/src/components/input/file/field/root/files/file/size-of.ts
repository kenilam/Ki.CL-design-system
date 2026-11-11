// Libraries
import i18next from 'i18next';

const MEGABYTE = 1024 * 1024;

export const sizeOf = (bytes: number) => {
  const megabytes = bytes >= MEGABYTE;

  return new Intl.NumberFormat(i18next.language, {
    maximumFractionDigits: 1,
    style: 'unit',
    unit: megabytes ? 'megabyte' : 'kilobyte',
  }).format(megabytes ? bytes / MEGABYTE : bytes / 1024);
};
