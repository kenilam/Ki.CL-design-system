// Partials
import type { Entry } from 'design/docs/search/spec';

export const rank = (query: string) => {
  return (a: Entry, b: Entry) => {
    return (
      Number(a.code) - Number(b.code) ||
      Number(!a.name.toLowerCase().startsWith(query)) -
        Number(!b.name.toLowerCase().startsWith(query)) ||
      a.name.length - b.name.length
    );
  };
};
