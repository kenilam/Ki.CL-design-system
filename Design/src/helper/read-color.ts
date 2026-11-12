let context: CanvasRenderingContext2D | null | undefined;

/**
 * A colour custom property as sRGB channels from 0 to 255, for canvas and
 * WebGL code. The computed value can be `oklab()` or `color-mix()`, so a
 * canvas paints it and reads the pixel back. `null` when it isn't a colour.
 */
const readColor = (element: Element, property: string) => {
  const value = getComputedStyle(element).getPropertyValue(property).trim();

  context ??= document
    .createElement('canvas')
    .getContext('2d', { willReadFrequently: true });

  if (!context || !CSS.supports('color', value)) {
    return null;
  }

  context.clearRect(0, 0, 1, 1);
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);

  const [red, green, blue, alpha] = context.getImageData(0, 0, 1, 1).data;

  return { alpha, blue, green, red };
};

export { readColor };
