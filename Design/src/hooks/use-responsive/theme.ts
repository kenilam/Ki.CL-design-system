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

export {
  DARK_THEME_CLASS_NAME,
  LIGHT_THEME_CLASS_NAME,
  readCookie,
  setTheme,
  subscribe,
  type Theme,
};
