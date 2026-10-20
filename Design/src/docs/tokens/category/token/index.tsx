import React from 'react';

import { Route } from 'design/router';

import { Contents } from './contents';

const Token = <Route path=':token' element={<Contents />} />;

export { Token };
