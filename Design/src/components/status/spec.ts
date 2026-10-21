// Components
import { AnimationProps, HeadingProps, TextProps } from 'design/components';
import type { HeadingIs } from 'design/components/heading/spec';
import type { Props as LayoutProps } from 'design/components/layout/spec';
import { LEVELS } from 'design/components/spec';
import type { Level } from 'design/components/spec';

// Icons
import { IconType } from 'design/icons';

type StatusLevel = Exclude<Level, 'confirm' | 'neutral'>;

export const STATUS_LEVELS = LEVELS.filter(
  (level): level is StatusLevel => level !== 'confirm' && level !== 'neutral'
);

export type Icons = {
  [level in StatusLevel]: ReturnType<IconType>;
};

export type Props = AnimationProps &
  Pick<LayoutProps, 'justifyContent'> & {
    /** Outline level of the title. It keeps the `h4` size whatever the level. */
    headingLevel?: HeadingIs;
    level?: StatusLevel;
    message?: TextProps['children'];
    /** Left out with a `message`, no heading shows. Left out with neither, the level's default title shows. */
    title?: HeadingProps['children'];
  };
