import type { LayoutProps } from 'design/components';
import type { PolymorphicIsProps } from 'design/components/polymorphic';

export type Props = LayoutProps & PolymorphicIsProps<'ol' | 'ul', object, 'ul'>;
