type Channels = { c: number; h: number; l: number };

const toLinear = (value: number) => {
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
};

const toGamma = (value: number) => {
  return value <= 0.0031308
    ? value * 12.92
    : 1.055 * value ** (1 / 2.4) - 0.055;
};

// Björn Ottosson's OKLab, https://bottosson.github.io/posts/oklab/
const oklchOf = (hex: string): Channels => {
  const [r, g, b] = [1, 3, 5].map((start) => {
    return toLinear(parseInt(hex.slice(start, start + 2), 16) / 255);
  });
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const h = (Math.atan2(bb, a) * 180) / Math.PI;

  return {
    c: Math.hypot(a, bb),
    h: h < 0 ? h + 360 : h,
    l: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
  };
};

const rgbOf = ({ c, h, l }: Channels) => {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const lc = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const mc = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const sc = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;

  return [
    4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc,
    -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc,
    -0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc,
  ];
};

const fits = (channels: Channels) => {
  return rgbOf(channels).every((value) => value >= -1e-4 && value <= 1 + 1e-4);
};

// A color outside sRGB keeps its lightness and hue and loses chroma until it fits.
const hexOf = (channels: Channels) => {
  let low = 0;
  let high = channels.c;

  for (let step = 0; step < 20 && !fits(channels); step += 1) {
    const middle = (low + high) / 2;

    if (fits({ ...channels, c: middle })) {
      low = middle;
    } else {
      high = middle;
    }
  }

  const c = fits(channels) ? channels.c : low;
  const digits = rgbOf({ ...channels, c }).map((value) => {
    const byte = Math.round(toGamma(Math.min(1, Math.max(0, value))) * 255);

    return byte.toString(16).padStart(2, '0');
  });

  return `#${digits.join('')}`;
};

export { hexOf, oklchOf, type Channels };
