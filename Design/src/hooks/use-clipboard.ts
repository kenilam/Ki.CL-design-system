import { useEffect, useState } from 'react';

/** How long `copied` stays true after a copy. */
const COPIED_MS = 2000;

/**
 * Copies text to the clipboard and says, for a moment, that it did. `copy`
 * resolves false where there is no clipboard, outside a secure context, and
 * `copied` stays false.
 */
const useClipboard = (duration = COPIED_MS) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = setTimeout(() => setCopied(false), duration);

    return () => clearTimeout(timer);
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
