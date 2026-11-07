import React from 'react';

// Routes
import { Route } from 'design/router';

// Views
import { Category } from './category';

// Partials
import { Home } from './home';

// Constants
import { TOKENS_PATH as PATH } from 'design/docs/paths';

const Tokens = (
  <Route path={PATH}>
    <Route index element={<Home />} />
    {Category}
  </Route>
);

export { PATH, Tokens };
