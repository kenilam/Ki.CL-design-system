// Partials
import { usePreviewContext } from 'design/mdx/preview/context';

export const UNSET = '';

const useOptions = (name: string) => {
  const { controls, values } = usePreviewContext();
  const control = controls[name];

  if (control.options === 'boolean') {
    return { fallback: UNSET, options: [] };
  }

  const excluded = control.except
    ? (values[control.except] ?? controls[control.except]?.default)
    : undefined;
  const options = control.options.filter((option) => {
    return option !== excluded;
  });

  return {
    fallback:
      control.default ?? (options.includes('default') ? 'default' : UNSET),
    options,
  };
};

export { useOptions };
