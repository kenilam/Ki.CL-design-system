import { createContext, useContext } from 'react';

/**
 * The path the host mounted the docs at, such as `/design-system`. Links are
 * written from it: under a splat route, React Router resolves a relative link
 * from the whole URL, so `button` from `/design-system/card` would go to
 * `/design-system/card/button`.
 */
const BaseContext = createContext('');

/** The path to a docs page, or to the home page with no slug. */
const useDocsPath = () => {
  const base = useContext(BaseContext);

  return (slug = '') => `${base}/${slug}`;
};

export { BaseContext, useDocsPath };
