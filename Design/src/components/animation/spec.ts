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

/**
 * There is no lifecycle callback API here on purpose.
 *
 * This component clones its props onto the child element, so the platform's
 * own transition events - `onTransitionRun`, `onTransitionStart`,
 * `onTransitionEnd`, `onTransitionCancel` - arrive already working, with the
 * semantics and the payload the DOM defines. A parallel set of
 * `onEnter`/`onEntered` props would only be a second, less capable name for
 * the same moments, and one the browser would not agree with when a
 * transition is interrupted.
 *
 * Which direction is running is not something the events need to carry: it is
 * `in`, which the caller already owns.
 */
export type Options = {
  delay?: number;
  duration?: Duration;
  easing?: Easing;
  property?: Property;
  className?: string;
  /** Whether the child should be shown. Drives both directions. */
  in?: boolean;
  nodeRef?: Ref<HTMLElement | null>;
};

export type Props = PropsWithChildren<Options & Record<string, unknown>>;
