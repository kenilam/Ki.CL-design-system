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
import * as Tb from 'react-icons/tb';

const CLASS_NAME = 'kicl--widgets--theme-toggle';

type ThemeToggleProps = Pick<
  React.ComponentProps<typeof Button>,
  'block' | 'className' | 'size' | 'variant'
>;

const ThemeToggle: React.FunctionComponent<ThemeToggleProps> = ({
  block,
  className,
  size,
  variant,
}) => {
  const { setTheme, theme } = useResponsive();
  const t = useCopy();

  const isDark = theme === 'dark';

  const Icon = isDark ? Tb.TbSun : Tb.TbMoon;

  return (
    <Button
      aria-label={isDark ? t('label_light_theme') : t('label_dark_theme')}
      block={block}
      className={classNames(CLASS_NAME, className)}
      onClick={() => {
        setTheme(isDark ? 'light' : 'dark');
      }}
      size={size}
      variant={variant}
    >
      <Icon aria-hidden />
    </Button>
  );
};

export { ThemeToggle, type ThemeToggleProps };
