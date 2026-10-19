import React from 'react';

// Routes
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

// Status
import { Status404 } from 'design/status';

// Partials
import { BaseContext } from './base';
import { Home } from './home';
import { Page } from './page';
import { Shell } from './shell';

/**
 * The design system's own docs: a home page and a page for each component.
 * A host mounts it under any path that ends in a splat:
 * `<Route path='design-system/*' element={<Docs />} />`.
 */
const Docs: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const { '*': rest = '' } = useParams();

  // What the splat didn't match is where the docs are mounted.
  const base = pathname
    .slice(0, pathname.length - rest.length)
    .replace(/\/$/, '');

  return (
    <BaseContext.Provider value={base}>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path=':page' element={<Page />} />
          <Route path='*' element={<Status404 />} />
        </Route>
      </Routes>
    </BaseContext.Provider>
  );
};

export { Docs };
