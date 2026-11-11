import React, { useState } from 'react';

const useLeave = (transitionIn: boolean) => {
  // Reset during render, not in an effect, so a child that comes back shows on
  // the same render.
  const [left, setLeft] = useState(!transitionIn);
  const [previous, setPrevious] = useState(transitionIn);

  if (previous !== transitionIn) {
    setPrevious(transitionIn);
    setLeft(false);
  }

  // Transition events bubble from descendants, so only the element's own count.
  const leave = (handler?: React.TransitionEventHandler<HTMLElement>) => {
    return (event: React.TransitionEvent<HTMLElement>) => {
      handler?.(event);

      if (!transitionIn && event.target === event.currentTarget) {
        setLeft(true);
      }
    };
  };

  return { left, leave };
};

export { useLeave };
