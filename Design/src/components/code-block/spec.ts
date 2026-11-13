import type React from 'react';

export const CODE_BLOCK_LANGUAGES = ['javascript', 'markup', 'tsx'] as const;

export type Props = {
  children: string;
  language?: (typeof CODE_BLOCK_LANGUAGES)[number];
} & Pick<React.ComponentProps<'pre'>, 'className'>;
