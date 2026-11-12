import React from 'react';

// Context
import { useHyperLink } from 'design/components/hyper-link/context';

// Partials
import { Line } from './line';
import { NewTab } from './new-tab';

const Contents: React.FunctionComponent = () => {
  const hyperLink = useHyperLink();

  let contents = hyperLink.children;

  if (hyperLink.after || hyperLink.before) {
    contents = (
      <>
        {hyperLink.before}
        {hyperLink.hasLine ? <Line>{contents}</Line> : contents}
        {hyperLink.after}
      </>
    );
  }

  if (hyperLink.target === '_blank') {
    contents = (
      <>
        {contents}
        <NewTab />
      </>
    );
  }

  return contents;
};

export { Contents };
