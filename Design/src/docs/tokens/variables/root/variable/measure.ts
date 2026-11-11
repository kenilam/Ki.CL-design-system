// Helpers
import { toHex } from 'design/docs/tokens/to-hex';

export const measure = (probe: HTMLElement, name: string) => {
  const measured = getComputedStyle(probe);
  const value = measured.getPropertyValue(`--kicl-${name}`).trim();

  if (/^(#|rgb|hsl|oklab|oklch|lab|lch|color)/.test(value)) {
    return toHex(probe, name);
  }

  if (!/^(calc|clamp|min|max)\(|^[\d.]+rem$/.test(value)) {
    return value;
  }

  probe.style.setProperty('inline-size', `var(--kicl-${name})`);

  return `${Math.round(parseFloat(measured.inlineSize) * 100) / 100}px`;
};
