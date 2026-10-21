import React from 'react';

/**
 * Puts each run of text in a control in its own `kicl-text-truncate` span.
 * A control's label stays on one line and ends in an ellipsis, and only an
 * element can: a bare text node in a grid takes no `text-overflow`.
 */
const truncateText = (node: React.ReactNode) =>
  React.Children.map(node, (child) =>
    typeof child === 'string' || typeof child === 'number' ? (
      <span className='kicl-text-truncate'>{child}</span>
    ) : (
      child
    )
  );

export { truncateText };
