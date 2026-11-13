import React from 'react';

// Libraries
import type { RenderProps } from 'prism-react-renderer';

const renderLines = ({
  getLineProps,
  getTokenProps,
  tokens,
}: Pick<RenderProps, 'getLineProps' | 'getTokenProps' | 'tokens'>) => {
  return tokens.map((line, index) => {
    return (
      <span {...getLineProps({ line })} key={index}>
        {line.map((token, position) => {
          return <span {...getTokenProps({ token })} key={position} />;
        })}
        {'\n'}
      </span>
    );
  });
};

export { renderLines };
