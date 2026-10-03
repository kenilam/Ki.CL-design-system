export type CSSUnit = (prop?: { values?: number | string }) => number;

export type Style = {
  [name: string]: number | string;
};
