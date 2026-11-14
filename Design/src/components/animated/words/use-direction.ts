import { useLayoutEffect, useRef, useState } from 'react';

import type { Direction } from './foreign';

const useDirection = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const [direction, setDirection] = useState<Direction>('ltr');

  useLayoutEffect(() => {
    setDirection(ref.current?.matches(':dir(rtl)') ? 'rtl' : 'ltr');
  }, []);

  return { direction, ref };
};

export { useDirection };
