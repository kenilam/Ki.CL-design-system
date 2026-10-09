import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

// Context
import { useGlobalHeaderContext } from './context';

// Constants
import { CLASS_NAME } from './constants';

const CssVariables: React.FunctionComponent = () => {
  const { rect } = useGlobalHeaderContext();

  /*
   * A header that is `hidden` measures as 0px. Keep the last real height, so
   * what reads it has it as soon as the header is back. How much of that
   * height covers the window at any moment is the stylesheet's to say.
   */
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
