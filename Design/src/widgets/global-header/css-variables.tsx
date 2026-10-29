import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

// Context
import { useGlobalHeaderContext } from './context';

// Constants
import { CLASS_NAME } from './constants';

const CssVariables: React.FunctionComponent = () => {
  const { rect } = useGlobalHeaderContext();

  // A hidden header measures 0px, so this keeps the last real height.
  const blockSize = useRef(0);

  if (rect?.height) {
    blockSize.current = rect.height;
  }

  return ReactDOM.createPortal(
    <style data-widget-global-header-uuid={`${CLASS_NAME}--css-variables`}>
      {`:root {
          --${CLASS_NAME}--block-size: ${blockSize.current}px;
        }`}
    </style>,
    window.document.body
  );
};

export { CssVariables };
