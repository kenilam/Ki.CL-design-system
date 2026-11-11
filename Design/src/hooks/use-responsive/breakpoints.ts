import { CSSUnit } from 'design/helper';

type Breakpoint =
  | 'attenuated'
  | 'narrowest'
  | 'narrower'
  | 'narrow'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest';

type Breakpoints = {
  [breakpoint in Breakpoint]: ReturnType<typeof CSSUnit>;
};

const getBreakpoints = (): Breakpoints => {
  const root = window.getComputedStyle(document.documentElement);

  return {
    attenuated: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-attenuated'),
    }),
    narrowest: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-narrowest'),
    }),
    narrower: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-narrower'),
    }),
    narrow: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-narrow'),
    }),
    normal: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-normal'),
    }),
    wide: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-wide'),
    }),
    wider: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-wider'),
    }),
    widest: CSSUnit({
      values: root.getPropertyValue('--kicl-breakpoint-widest'),
    }),
  };
};

export { getBreakpoints };
