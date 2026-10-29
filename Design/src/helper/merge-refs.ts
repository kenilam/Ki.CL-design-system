import type React from 'react';

const mergeRefs = <Node>(...refs: (React.Ref<Node> | undefined)[]) => {
  return (node: Node | null) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }
      if (typeof ref === 'function') {
        ref(node);
        return;
      }
      (ref as React.RefObject<Node | null>).current = node;
    });
  };
};

export { mergeRefs };
