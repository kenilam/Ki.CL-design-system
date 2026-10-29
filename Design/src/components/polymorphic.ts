import type { JSX } from 'react';

type IntrinsicOf<E extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[E];

type KeysOf<E extends keyof JSX.IntrinsicElements> = keyof IntrinsicOf<E>;

type ForeignKeys<
  Is extends keyof JSX.IntrinsicElements,
  E extends Is,
> = Is extends unknown ? Exclude<KeysOf<Is>, KeysOf<E>> : never;

/**
 * Plain unions allow extra attributes, so other hosts' attributes are set to
 * `never` to reject e.g. `href` when `is` isn't `'a'`.
 */
type ForbidForeignAttrs<
  Is extends keyof JSX.IntrinsicElements,
  E extends Is,
> = {
  [K in ForeignKeys<Is, E>]?: never;
};

export type PolymorphicIsProps<
  Is extends keyof JSX.IntrinsicElements,
  Own extends object,
  Default extends Is,
> = {
  [E in Is]: (E extends Default ? { is?: Default } : { is: E }) &
    Own &
    Omit<IntrinsicOf<E>, keyof Own | 'is'> &
    ForbidForeignAttrs<Is, E>;
}[Is];
