import React from 'react';

// Routes
import { Route, Routes } from 'design/router';

// Status
import { Status404 } from 'design/status';

// View
import { Category } from './category';

// Partials
import { Provider } from './context';
import { Home } from './home';
import { Shell } from './shell';

const Docs: React.FunctionComponent = () => {
  return (
    <Provider>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          {Category}
        </Route>
        <Route path='*' element={<Status404 />} />
      </Routes>
    </Provider>
  );
};

export { Docs };
