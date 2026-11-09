import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Hooks
import { useResponsive } from 'design/hooks';

// Icons
import * as Bs from 'react-icons/bs';

const CLASS_NAME = 'kicl--widgets--theme-toggle';

type Look = Pick<React.ComponentProps<typeof Button>, 'size' | 'variant'>;

/** Without a `variant` it's a bare icon. */
type ThemeToggleProps = Pick<React.ComponentProps<typeof Button>, 'className'> &
  ((Look & Required<Pick<Look, 'variant'>>) | { [Key in keyof Look]?: never });

const ThemeToggle: React.FunctionComponent<ThemeToggleProps> = ({
  className,
  size,
  variant,
}) => {
  const { setTheme, theme } = useResponsive();
  const t = useCopy();

  const isDark = theme === 'dark';

  const Icon = isDark ? Bs.BsSun : Bs.BsMoon;

  return (
    <Button
      aria-pressed={isDark}
      className={classNames('kicl-font-size', CLASS_NAME, className)}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
      {...(variant ? { size, variant } : ({ unstyled: true } as const))}
    >
      <Icon aria-hidden />
      <span className='kicl-hidden'>{t('label_dark_theme')}</span>
    </Button>
  );
};

export { ThemeToggle, type ThemeToggleProps };
