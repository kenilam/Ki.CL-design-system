import React from 'react';

/** A bare text node in a grid takes no `text-overflow`, so each run of text gets a span. */
const truncateText = (node: React.ReactNode) => {
  return React.Children.map(node, (child) => {
    return typeof child === 'string' || typeof child === 'number' ? (
      <span className='kicl-text-truncate'>{child}</span>
    ) : (
      child
    );
  });
};

export { truncateText };
