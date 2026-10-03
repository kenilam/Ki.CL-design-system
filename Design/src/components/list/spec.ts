import type { LayoutProps } from '..';
import type { PolymorphicIsProps } from '../polymorphic';

export type ListIs = 'ol' | 'ul';

export type Switch = PolymorphicIsProps<ListIs, object, 'ul'>;

export type Node = Switch;

export type Props = LayoutProps & Switch;
