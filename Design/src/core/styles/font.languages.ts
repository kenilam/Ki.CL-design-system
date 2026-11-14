import hans from '@fontsource-variable/noto-sans-sc/wght.css?url';
import hant from '@fontsource-variable/noto-sans-hk/wght.css?url';
import jpan from '@fontsource-variable/noto-sans-jp/wght.css?url';
import kore from '@fontsource-variable/noto-sans-kr/wght.css?url';

const SHEETS: Record<string, string> = {
  Hans: hans,
  Hant: hant,
  Jpan: jpan,
  Kore: kore,
};

const load = () => {
  const { lang } = document.documentElement;

  if (!lang) {
    return;
  }

  const href = SHEETS[new Intl.Locale(lang).maximize().script ?? ''];

  if (!href || document.querySelector(`link[href='${href}']`)) {
    return;
  }

  const link = document.createElement('link');

  link.href = href;
  link.rel = 'stylesheet';
  document.head.append(link);
};

new MutationObserver(load).observe(document.documentElement, {
  attributeFilter: ['lang'],
});

load();
