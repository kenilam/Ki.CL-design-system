import { PropsWithChildren, Ref } from 'react';

export const DURATIONS = [
  'instant',
  'fastest',
  'faster',
  'fast',
  'slow',
  'slower',
  'slowest',
  'extreme',
] as const;

export type Duration = (typeof DURATIONS)[number];

export const EASINGS = [
  'ease-in',
  'ease-out',
  'ease-back-in',
  'ease-back-out',
  'ease-back-in-out',
  'ease-circ-in',
  'ease-circ-out',
  'ease-circ-in-out',
  'ease-cubic-in',
  'ease-cubic-out',
  'ease-cubic-in-out',
  'ease-expo-in',
  'ease-expo-out',
  'ease-expo-in-out',
  'ease-quad-in',
  'ease-quad-out',
  'ease-quad-in-out',
  'ease-quart-in',
  'ease-quart-out',
  'ease-quart-in-out',
  'ease-quint-in',
  'ease-quint-out',
  'ease-quint-in-out',
  'ease-sharp-in-out',
  'ease-sine-in',
  'ease-sine-out',
  'ease-sine-in-out',
] as const;

export type Easing = (typeof EASINGS)[number];

export const PROPERTIES = [
  'blur',
  'fade',
  'slide-from-bottom',
  'slide-from-left',
  'slide-from-right',
  'slide-from-top',
  'zoom-in',
  'zoom-out',
] as const;

export type Property = (typeof PROPERTIES)[number];

export type Options = {
  delay?: number;
  duration?: Duration;
  easing?: Easing;
  property?: Property;
  className?: string;
  in?: boolean;
  nodeRef?: Ref<HTMLElement | null>;
};

export type Props = PropsWithChildren<Options & Record<string, unknown>>;
