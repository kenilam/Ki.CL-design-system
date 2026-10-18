// Components
import { AnimationProps, HeadingProps, TextProps } from 'design/components';
import type { HeadingIs } from 'design/components/heading/spec';
import type { Props as LayoutProps } from 'design/components/layout/spec';
import type { TextAccent } from 'design/components/text/spec';

// Icons
import { IconType } from 'design/icons';

type Level = Exclude<TextAccent, 'confirm'>;

export type Icons = {
  [level in Level]: ReturnType<IconType>;
};

export type Props = AnimationProps &
  Pick<LayoutProps, 'justifyContent'> & {
    /** Outline level of the title. It keeps the `h4` size whatever the level. */
    headingLevel?: HeadingIs;
    level?: Level;
    message?: TextProps['children'];
    /** Left out with a `message`, no heading shows. Left out with neither, the level's default title shows. */
    title?: HeadingProps['children'];
  };
