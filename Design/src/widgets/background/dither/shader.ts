/*
 * A fragment shader, because the dither is per device pixel and a CPU loop
 * over a 4K canvas can't keep up. The levels are deliberately few so the
 * pattern shows, and colours mix in Oklab so cream into blue passes through
 * lilac, not grey.
 */

export const MAX_POOLS = 6;

export const VERTEX = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export const FRAGMENT = `
precision highp float;

const int MAX_POOLS = ${MAX_POOLS};

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_cell;
uniform float u_levels;
uniform vec3 u_paper;
uniform int u_count;
uniform vec3 u_ink[MAX_POOLS];
uniform vec4 u_pool[MAX_POOLS];
uniform vec2 u_shape[MAX_POOLS];

/* Fades the centre toward the paper so the copy over it stays readable. */
const float CLEARING_INNER = 0.14;
const float CLEARING_OUTER = 0.55;
const float CLEARING_KEEP = 0.28;

const float FALLOFF = 1.6;

/* Warps the space so the ellipses' edges don't read as shapes. */
const float WARP_LARGE = 0.07;
const float WARP_SMALL = 0.03;

/* Noise so the screen doesn't read as a grid. */
const float GRAIN = 0.03;

/* Trims the extra chroma where pools overlap. */
const float CHROMA = 0.92;

const float SPEED = 0.3;

vec3 toLinear(vec3 c) {
  return pow(c, vec3(2.2));
}

vec3 toSrgb(vec3 c) {
  return pow(max(c, 0.0), vec3(1.0 / 2.2));
}

vec3 toOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;

  l = pow(l, 1.0 / 3.0);
  m = pow(m, 1.0 / 3.0);
  s = pow(s, 1.0 / 3.0);

  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  );
}

vec3 fromOklab(vec3 c) {
  float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;

  float l = l_ * l_ * l_;
  float m = m_ * m_ * m_;
  float s = s_ * s_ * s_;

  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

/* Bayer 8×8 built recursively from the 2×2 matrix, as a threshold in [0, 1). */
float bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}

float bayer4(vec2 a) {
  return bayer2(0.5 * a) * 0.25 + bayer2(a);
}

float bayer8(vec2 a) {
  return bayer4(0.5 * a) * 0.25 + bayer2(a);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.y = 1.0 - uv.y;

  float aspect = u_resolution.x / u_resolution.y;
  float s = u_time * SPEED;

  vec2 warped = uv + vec2(
    WARP_LARGE * sin(uv.y * 4.0 + s * 1.7) + WARP_SMALL * sin(uv.y * 9.0 - s),
    WARP_LARGE * cos(uv.x * 3.0 - s * 1.3) + WARP_SMALL * cos(uv.x * 7.0 + s * 0.6)
  );

  vec3 paper = toOklab(toLinear(u_paper));
  vec3 colour = paper;

  for (int i = 0; i < MAX_POOLS; i++) {
    if (i >= u_count) {
      break;
    }

    vec4 pool = u_pool[i];
    vec2 shape = u_shape[i];
    vec2 d = vec2((warped.x - pool.x) * aspect, warped.y - pool.y);
    float c = cos(shape.x);
    float sn = sin(shape.x);
    vec2 u = vec2((d.x * c - d.y * sn) / pool.z, (d.x * sn + d.y * c) / pool.w);
    float coverage = shape.y * exp(-dot(u, u) * FALLOFF);

    colour = mix(colour, toOklab(toLinear(u_ink[i])), clamp(coverage, 0.0, 1.0));
  }

  vec2 centred = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  float clearing = smoothstep(CLEARING_INNER, CLEARING_OUTER, length(centred));

  colour = mix(paper, colour, mix(CLEARING_KEEP, 1.0, clearing));
  colour.yz *= CHROMA;

  vec3 rgb = toSrgb(fromOklab(colour));

  vec2 cell = floor(gl_FragCoord.xy / u_cell);
  float threshold = bayer8(cell);

  rgb += (hash(cell) - 0.5) * GRAIN;
  rgb = floor(rgb * u_levels + threshold) / u_levels;

  gl_FragColor = vec4(clamp(rgb, 0.0, 1.0), 1.0);
}
`;
