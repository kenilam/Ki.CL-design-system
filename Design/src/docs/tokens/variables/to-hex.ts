/**
 * The hex of a colour token, read by painting it: a computed `color` can come
 * back as `oklab()` or `color-mix()`, which a reader can't compare.
 */
const toHex = (probe: HTMLElement, name: string) => {
  const canvas = document.createElement('canvas').getContext('2d', {
    willReadFrequently: true,
  });

  if (!canvas) {
    return '';
  }

  probe.style.setProperty('color', `var(--kicl-${name})`);
  canvas.clearRect(0, 0, 1, 1);
  canvas.fillStyle = getComputedStyle(probe).color;
  canvas.fillRect(0, 0, 1, 1);

  return `#${Array.from(canvas.getImageData(0, 0, 1, 1).data.slice(0, 3))
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
};

export { toHex };
