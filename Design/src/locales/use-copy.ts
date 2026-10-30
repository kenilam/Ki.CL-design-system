import { useSyncExternalStore } from 'react';

// Libraries
import i18next, { createInstance } from 'i18next';
import { useTranslation } from 'react-i18next';

// Copy
import en from './en-US/design.json';

const NAMESPACE = 'design';

type Key = keyof typeof en;
type Values = Record<string, number | string>;

/** Typed here, so the generated types of the remote carry nothing of i18next's. */
type Copy = (key: Key, values?: Values) => string;

const bundled = createInstance();

void bundled.init({
  defaultNS: NAMESPACE,
  // React escapes what it renders.
  interpolation: { escapeValue: false },
  lng: 'en-US',
  ns: [NAMESPACE],
  resources: { 'en-US': { [NAMESPACE]: en } },
});

const HOSTED = { i18n: i18next, useSuspense: false };
const BUNDLED = { i18n: bundled, useSuspense: false };

const EVENTS = ['initialized', 'languageChanged', 'loaded'];

const isHosted = () => {
  return Boolean(
    i18next.isInitialized &&
    i18next.hasResourceBundle(
      i18next.resolvedLanguage ?? i18next.language,
      NAMESPACE
    )
  );
};

let asked = false;

const ask = () => {
  if (asked || !i18next.isInitialized) {
    return;
  }

  asked = true;

  void i18next.loadNamespaces(NAMESPACE);
};

const subscribe = (listener: () => void) => {
  const onChange = () => {
    ask();
    listener();
  };

  ask();

  EVENTS.forEach((event) => {
    i18next.on(event, onChange);
  });

  return () => {
    EVENTS.forEach((event) => {
      i18next.off(event, onChange);
    });
  };
};

/** Never suspends, since components render inside spinners and outside any route. */
const useCopy = (): Copy => {
  const hosted = useSyncExternalStore(subscribe, isHosted, isHosted);
  const { t } = useTranslation(NAMESPACE, hosted ? HOSTED : BUNDLED);

  return (key, values) => {
    return t(key, { ...values, defaultValue: bundled.t(key, values) });
  };
};

export { useCopy };
