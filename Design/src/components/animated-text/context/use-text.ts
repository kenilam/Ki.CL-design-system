import { useState } from 'react';

// Spec
import type * as Spec from 'design/components/animated-text/spec';

const useText = (children: Spec.Props['children']) => {
  let text: string | null = null;

  if (['string', 'number'].includes(typeof children)) {
    text = String(children);
  }

  const [first, setFirst] = useState(text);
  const [replaced, setReplaced] = useState(false);

  if (first === null && text !== null) {
    setFirst(text);
  }

  if (first !== null && text !== first && !replaced) {
    setReplaced(true);
  }

  return { replaced, text };
};

export { useText };
