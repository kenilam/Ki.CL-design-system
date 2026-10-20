import React from 'react';

// Routes
import { Navigate, Route } from 'design/router';

// View
import { Token } from './token';

const Category = (
  <Route path=':category'>
    <Route index element={<Navigate to='..' replace />} />
    {Token}
  </Route>
);

export { Category };
