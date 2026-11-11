export const SPREAD = '{...props}';

export type Attribute = {
  /** Empty for a spread other than `{...props}`, which is kept as it is. */
  name: string;
  raw: string;
};

export type Tag = {
  start: number;
  end: number;
  name: string;
  attributes: Attribute[];
  closing: string;
  multiline: boolean;
  /** Before each attribute on a multiline tag. */
  indent: string;
  /** Before the tag's name and its closing. */
  lineIndent: string;
};
