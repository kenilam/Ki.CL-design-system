import React, { useEffect } from 'react';

// Libraries
import { useLocation } from 'react-router-dom';

/**
 * `key`, not `pathname`: it changes on every navigation, a link to the route
 * already open and the back button included.
 */
const useCloseOnNavigate = (
  node: React.RefObject<HTMLDialogElement | null>
) => {
  const { key } = useLocation();

  useEffect(() => {
    node.current?.close();
  }, [key, node]);
};

export { useCloseOnNavigate };
