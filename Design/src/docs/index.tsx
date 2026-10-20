import React from 'react';

// Routes
import { Route, Routes } from 'design/router';

// Status
import { Status404 } from 'design/status';

// Views
import { Components } from './components';
import { Home } from './home';

// Partials
import { Provider } from './context';
import { Shell } from './shell';

const Docs: React.FunctionComponent = () => {
  return (
    <Provider>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          {Components}
        </Route>
        <Route path='*' element={<Status404 />} />
      </Routes>
    </Provider>
  );
};

export { Docs };
