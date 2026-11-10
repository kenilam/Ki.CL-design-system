const reveal = (details: HTMLDetailsElement) => {
  const { transitionDuration } = getComputedStyle(
    details,
    '::details-content'
  );
  const end = performance.now() + parseFloat(transitionDuration) * 1000;
  const summary = details.querySelector(':scope > summary');
  const last = details.lastElementChild;

  const follow = (now: number) => {
    if (!details.open) {
      return;
    }

    last?.scrollIntoView({ block: 'nearest' });
    summary?.scrollIntoView({ block: 'nearest' });

    if (now < end) {
      requestAnimationFrame(follow);
    }
  };

  requestAnimationFrame(follow);
};

export { reveal };
