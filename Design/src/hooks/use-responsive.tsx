import { useEffect, useSyncExternalStore } from 'react';

// Libraries
import { useMediaQuery } from 'react-responsive';

import { CSSUnit } from 'design/helper';

type Theme = 'dark' | 'light';

/**
 * A cookie rather than local storage, so a server can read the choice and
 * render in it once there is one that renders.
 */
const COOKIE_NAME = 'kicl-theme';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

const readCookie = (): Theme | undefined => {
  const value = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`))
    ?.split('=')[1];

  return value === 'dark' || value === 'light' ? value : undefined;
};

const setTheme = (theme: Theme) => {
  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;

  listeners.forEach((listener) => listener());
};

const DARK_THEME_CLASS_NAME = 'kicl--theme--dark';

/** The class of a light island inside the dark theme. */
const LIGHT_THEME_CLASS_NAME = 'kicl--theme--light';

type Breakpoint = 'desktop' | 'mobile' | 'tablet' | 'wide';

type Breakpoints = {
  [breakpoint in Breakpoint]: ReturnType<typeof CSSUnit>;
};

const root = window.getComputedStyle(document.documentElement);

const breakpoints: Breakpoints = {
  desktop: CSSUnit({
    values: root.getPropertyValue('--kicl-breakpoint-desktop'),
  }),
  tablet: CSSUnit({
    values: root.getPropertyValue('--kicl-breakpoint-tablet'),
  }),
  mobile: CSSUnit({
    values: root.getPropertyValue('--kicl-breakpoint-mobile'),
  }),
  wide: CSSUnit({ values: root.getPropertyValue('--kicl-breakpoint-wide') }),
};

/**
 * The window's breakpoints and the theme. The theme follows the system until
 * the person picks one, then keeps their pick, and its class goes on the body.
 */
const useResponsive = () => {
  const isDarkColorSchemePrefers = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });

  const chosen = useSyncExternalStore(subscribe, readCookie);

  const theme: Theme = chosen ?? (isDarkColorSchemePrefers ? 'dark' : 'light');

  useEffect(() => {
    document.body.classList.toggle(DARK_THEME_CLASS_NAME, theme === 'dark');
  }, [theme]);

  /*
   * Paper is light. The dark theme would print as a sheet of ink under pale
   * type, so its class comes off for the print and goes back after. It is
   * done on the element, in the event: the browser lays the print out as
   * soon as the handler returns, and a state update would land too late.
   */
  useEffect(() => {
    if (theme !== 'dark') {
      return;
    }

    const light = () => {
      document.body.classList.remove(DARK_THEME_CLASS_NAME);
    };

    const dark = () => {
      document.body.classList.add(DARK_THEME_CLASS_NAME);
    };

    window.addEventListener('beforeprint', light);
    window.addEventListener('afterprint', dark);

    return () => {
      window.removeEventListener('beforeprint', light);
      window.removeEventListener('afterprint', dark);
    };
  }, [theme]);

  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const isDesktop = useMediaQuery({
    query: `(max-width: ${breakpoints.wide}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(max-width: ${breakpoints.desktop}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.tablet}px)`,
  });
  const isNarrow = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile}px)`,
  });
  const isWidescreen = useMediaQuery({
    query: `(min-width: ${breakpoints.wide + 1}px)`,
  });

  return {
    breakpoints,
    isDarkColorSchemePrefers,
    isDesktop: isDesktop || isWidescreen || !isTablet || !isMobile,
    isLandscape,
    isMobile: isMobile || isNarrow,
    isNarrow,
    isPortrait,
    isTablet: isTablet || isMobile,
    isWidescreen,
    setTheme,
    theme,
  };
};

export {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  type Theme,
  breakpoints,
  useResponsive,
};
