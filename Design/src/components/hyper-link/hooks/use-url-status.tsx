// Spec
import * as Spec from '../spec';

/**
 * Another site, which opens in a new tab. A `mailto:` or `tel:` link parses as
 * a URL too, but hands off to an app, and a new tab for it stays blank.
 */
const isExternal = (value: string) => {
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch {
    return false;
  }
};

const useURLStatus = (to: Spec.Props['to']) => {
  if (typeof to === 'string') {
    return {
      isExternal: isExternal(to),
      isHash: to.startsWith('#'),
      isSearch: to.startsWith('?'),
    };
  }

  if (to.pathname) {
    return {
      isExternal: isExternal(to.pathname),
      isHash: !!to.hash,
      isSearch: !!to.search,
    };
  }

  return {
    isExternal: false,
    isHash: false,
    isSearch: false,
  };
};

export { useURLStatus };
