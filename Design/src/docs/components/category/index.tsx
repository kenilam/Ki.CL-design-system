import React from 'react';

// Routes
import { Navigate, Route } from 'design/router';

// View
import { Component } from './component';

const Category = (
  <Route path=':category'>
    <Route index element={<Navigate to='..' replace />} />
    {Component}
  </Route>
);

export { Category };
