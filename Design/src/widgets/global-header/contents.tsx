import React from 'react';

// Libraries
import classNames from 'classnames';

// Widgets
import { SiteLogo, ThemeToggle } from 'design/widgets';

// Components
import { Layout } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { useGlobalHeaderContext } from './context';

// Constants
import { CLASS_NAME } from './constants';

// Spec
import * as Spec from './spec';

const Contents: React.FunctionComponent<Spec.GlobalHeaderProps> = ({
  children,
}) => {
  const { node } = useGlobalHeaderContext();
  const { isMobile } = useResponsive();

  const className = classNames(
    'kicl-backdrop',
    'kicl-font-size-small',
    'kicl-inline-size-full',
    'kicl-inset-block-start-0',
    'kicl-padding-block',
    'kicl-position-sticky',
    // A sticky header would print over the top of every sheet.
    'kicl-print-hidden',
    'kicl-text-transform-uppercase',
    'kicl-z-index-header',
    CLASS_NAME
  );

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='auto--max-content--max-content'
      gap='normal'
      ref={node}
    >
      <header className={className}>
        <SiteLogo />
        {isMobile ? null : children}
        <ThemeToggle />
        {isMobile ? children : null}
      </header>
    </Layout>
  );
};

export { Contents };
