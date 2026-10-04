import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button, Text } from '../../components';

// Hooks
import { useTheme } from '../../hooks';

// Icons
import * as Ri from 'react-icons/ri';

const CLASS_NAME = 'kicl--widgets--theme-toggle';

const COPY = {
  dark: 'Dark theme',
};

type ThemeToggleProps = Pick<
  React.ComponentProps<typeof Button>,
  'className' | 'size' | 'variant'
>;

/**
 * Switches between the light and dark theme. The global header has a bare
 * icon; given a `variant`, it's a button of that variant.
 */
const ThemeToggle: React.FunctionComponent<ThemeToggleProps> = ({
  className,
  size,
  variant,
}) => {
  const { setTheme, theme } = useTheme();

  const isDark = theme === 'dark';

  const Icon = isDark ? Ri.RiSunLine : Ri.RiMoonLine;

  return (
    <Button
      aria-pressed={isDark}
      className={classNames('kicl-font-size', CLASS_NAME, className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      size={size}
      unstyled={!variant}
      variant={variant}
    >
      <Icon aria-hidden />
      <Text className='kicl-hidden' is='span'>
        {COPY.dark}
      </Text>
    </Button>
  );
};

export { ThemeToggle, type ThemeToggleProps };
