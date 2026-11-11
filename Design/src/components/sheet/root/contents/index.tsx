import React from 'react';

// Partials
import { Body } from './body';
import { Close } from './close';
import { Footer } from './footer';
import { Header } from './header';

const Contents: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <Close />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export { Contents };
