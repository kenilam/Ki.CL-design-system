import React from 'react';

import { Route } from 'design/router';

import { Contents } from './contents';

const Component = <Route path=':component' element={<Contents />} />;

export { Component };
