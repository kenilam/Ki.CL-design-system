import React from 'react';

// Components
import { Spinner } from 'design/components';

// Spec
import type * as Spec from './spec';

// Class names
import { hasText } from './class-names';

const getButtonContent = ({
  after,
  before,
  busy,
  children,
}: Spec.ContentProps) => {
  if (!busy) {
    return { after, before, children };
  }

  const spinner = <Spinner position='inline' />;

  if (hasText(before, children, after)) {
    return { after: spinner, before, children };
  }

  return { after, before, children: spinner };
};

export { getButtonContent };
