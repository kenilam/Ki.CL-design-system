import type { TextProps } from 'design/components';

import type { Options } from 'design/components/animated/spec';

export type Props = Omit<TextProps, 'children'> & Options;
