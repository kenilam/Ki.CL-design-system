import React from 'react';

import { Route } from 'design/router';

import { Contents } from './contents';

const Pattern = <Route path=':pattern' element={<Contents />} />;

export { Pattern };
