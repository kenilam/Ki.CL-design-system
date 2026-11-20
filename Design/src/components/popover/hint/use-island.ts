import { useEffect, useState } from 'react';

// Hooks
import { DARK_THEME_CLASS_NAME, LIGHT_THEME_CLASS_NAME } from 'design/hooks';

// Context
import { usePopoverIds } from 'design/components/popover/context';

const THEMES = `.${DARK_THEME_CLASS_NAME}, .${LIGHT_THEME_CLASS_NAME}`;

/**
 * A hint moved to the body inverts the page's theme. Under a trigger in a part
 * with a theme of its own, like a light card on a dark page, it takes the
 * opposite of that part's theme instead, so it stands out from what it points
 * at.
 */
const useIsland = () => {
  const { id } = usePopoverIds();
  const [island, setIsland] = useState<string | null>(null);

  useEffect(() => {
    const scope = document
      .getElementById(`${id}__trigger`)
      ?.closest<HTMLElement>(THEMES);

    if (!scope || scope === document.body) {
      return;
    }

    setIsland(
      scope.classList.contains(LIGHT_THEME_CLASS_NAME)
        ? DARK_THEME_CLASS_NAME
        : LIGHT_THEME_CLASS_NAME
    );
  }, [id]);

  return island;
};

export { useIsland };
