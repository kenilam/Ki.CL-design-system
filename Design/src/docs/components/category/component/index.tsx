import React from 'react';

import { Route } from 'design/router';

import { Contents } from './contents';

const Component = <Route path=':component/:part?' element={<Contents />} />;

export { Component };
