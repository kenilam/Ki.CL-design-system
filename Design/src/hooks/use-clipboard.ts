import { useEffect, useState } from 'react';

const COPIED_MS = 2000;

/** `navigator.clipboard` is missing outside a secure context, so `copy` resolves false there. */
const useClipboard = (duration = COPIED_MS) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = setTimeout(() => {
      setCopied(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [copied, duration]);

  const copy = async (text: string) => {
    if (!navigator.clipboard) {
      return false;
    }

    await navigator.clipboard.writeText(text);

    setCopied(true);

    return true;
  };

  return { copied, copy };
};

export { useClipboard };
