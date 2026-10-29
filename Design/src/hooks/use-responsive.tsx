import { useEffect, useSyncExternalStore } from 'react';

// Libraries
import { useMediaQuery } from 'react-responsive';

import { CSSUnit } from 'design/helper';

type Theme = 'dark' | 'light';

/** A cookie, not local storage, so a future server render can read it. */
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
    .find((entry) => {
      return entry.startsWith(`${COOKIE_NAME}=`);
    })
    ?.split('=')[1];

  return value === 'dark' || value === 'light' ? value : undefined;
};

const setTheme = (theme: Theme) => {
  document.cookie = `${COOKIE_NAME}=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;

  listeners.forEach((listener) => {
    listener();
  });
};

const DARK_THEME_CLASS_NAME = 'kicl--theme--dark';

/** For a light island inside the dark theme. */
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

const useResponsive = () => {
  const isLightColorSchemePrefers = useMediaQuery({
    query: '(prefers-color-scheme: light)',
  });

  const chosen = useSyncExternalStore(subscribe, readCookie);

  const theme: Theme = chosen ?? (isLightColorSchemePrefers ? 'light' : 'dark');

  useEffect(() => {
    document.body.classList.toggle(DARK_THEME_CLASS_NAME, theme === 'dark');
  }, [theme]);

  /*
   * The dark class comes off for printing. It's done on the element in the
   * event because the browser lays out the print as soon as the handler
   * returns, before a state update would land.
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
    isLightColorSchemePrefers,
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
