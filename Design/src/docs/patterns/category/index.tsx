import React from 'react';

// Routes
import { Navigate, Route } from 'design/router';

// View
import { Pattern } from './pattern';

const Category = (
  <Route path=':category'>
    <Route index element={<Navigate to='..' replace />} />
    {Pattern}
  </Route>
);

export { Category };
