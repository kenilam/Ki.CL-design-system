import React, { useEffect, useRef, useState } from 'react';

import { useAnimated } from 'design/components/animated/context';
import { usePiece } from 'design/components/animated/words/context';

const TICK = 40;

const DIGIT = /\d/;

type Handler = React.TransitionEventHandler<HTMLElement>;

const useScramble = (at: number) => {
  const { characterSet, property } = useAnimated();
  const { offset, text } = usePiece(at);
  const [glyph, setGlyph] = useState<string | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const start: Handler = ({ currentTarget, target }) => {
    const effect = currentTarget.getAnimations()[0]?.effect;

    if (property !== 'scramble' || target !== currentTarget || !effect) {
      return;
    }

    const digit = DIGIT.test(text[at - offset]);
    const alike = Array.from(characterSet).filter((character) => {
      return DIGIT.test(character) === digit;
    });
    const pool = alike.length > 0 ? alike : Array.from(characterSet);
    let last: number | null = null;

    const tick = () => {
      const { duration, progress } = effect.getComputedTiming();
      const step = Math.floor(((progress ?? 1) * Number(duration)) / TICK);

      if (step !== last) {
        last = step;
        setGlyph(pool[Math.floor(Math.random() * pool.length)]);
      }

      frame.current = requestAnimationFrame(tick);
    };

    cancelAnimationFrame(frame.current);
    tick();
  };

  const stop: Handler = ({ currentTarget, target }) => {
    if (target !== currentTarget) {
      return;
    }

    cancelAnimationFrame(frame.current);
    setGlyph(null);
  };

  return { glyph, start, stop };
};

export { useScramble };
