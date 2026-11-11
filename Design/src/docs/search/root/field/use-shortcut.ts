import { useEffect, useRef } from 'react';

const useShortcut = () => {
  const field = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        event.key === '/' &&
        !target.isContentEditable &&
        !['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
      ) {
        event.preventDefault();
        field.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return field;
};

export { useShortcut };
