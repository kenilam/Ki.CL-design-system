import type React from 'react';

/** One callback ref that hands the node to every ref given, of either kind. */
const mergeRefs =
  <Node>(...refs: (React.Ref<Node> | undefined)[]) =>
  (node: Node | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.RefObject<Node | null>).current = node;
      }
    });
  };

export { mergeRefs };
