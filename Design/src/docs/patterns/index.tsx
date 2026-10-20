import React from 'react';

// Routes
import { Route } from 'design/router';

// Views
import { Category } from './category';

// Partials
import { Home } from './home';

// Constants
import { PATH } from './constants';

const Patterns = (
  <Route path={PATH}>
    <Route index element={<Home />} />
    {Category}
  </Route>
);

export { PATH, Patterns };
