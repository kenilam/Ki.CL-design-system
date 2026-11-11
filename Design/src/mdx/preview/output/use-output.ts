import { useEffect, useState } from 'react';

// Partials
import { useElement } from 'design/mdx/preview/context/element';
import { outputOf } from './output-of';

const useOutput = () => {
  const { element } = useElement();
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!element) {
      return undefined;
    }

    const read = () => {
      setOutput(outputOf(element));
    };
    const observer = new MutationObserver(read);

    read();
    observer.observe(element, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return output;
};

export { useOutput };
