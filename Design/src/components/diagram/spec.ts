import type { ReactNode } from 'react';
import type { IconType } from 'design/icons';
import type { Level } from 'design/components/spec';

export type Accent = 'blue' | 'green' | 'orange' | 'red' | 'yellow';

/** `label` names a colour or line style, and `value` says what it means. */
export type LegendItem = {
  label: string;
  level?: Level;
  value: string;
};

export type Group = {
  h: number;
  label: string;
  w: number;
  x: number;
  y: number;
};

export type Row = {
  /** Drawn in place of `type`. */
  icon?: IconType;
  key?: string;
  name: string;
  note?: string;
  type?: string;
};

export type Node = {
  h: number;
  /** Lets `state` name this node. */
  id?: string;
  lines?: string[];
  /** Renders the node as a table. */
  rows?: Row[];
  shape?: 'cylinder' | 'queue' | 'rect';
  title: string;
  w: number;
  x: number;
  y: number;
};

export type Edge = {
  accent?: Accent;
  anchor?: 'end' | 'middle' | 'start';
  /** Draw an arrowhead at the start as well. */
  both?: boolean;
  dashed?: boolean;
  label?: string;
  lx?: number;
  ly?: number;
  points: Array<[number, number]>;
};

export type Spec = {
  caption?: ReactNode;
  legend?: LegendItem[];
  /** Visually hidden; it describes the diagram to assistive tech. */
  description: string;
  edges: Edge[];
  groups?: Group[];
  height: number;
  nodes: Node[];
  title: string;
  width: number;
};
