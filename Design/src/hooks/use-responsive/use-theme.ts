import { useEffect, useSyncExternalStore } from 'react';

// Libraries
import { useMediaQuery } from 'react-responsive';

// Partials
import {
  DARK_THEME_CLASS_NAME,
  readCookie,
  setTheme,
  subscribe,
  type Theme,
} from './theme';

const useTheme = () => {
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

  return { isLightColorSchemePrefers, setTheme, theme };
};

export { useTheme };
