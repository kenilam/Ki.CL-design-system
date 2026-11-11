import { useCallback, useMemo, useState } from 'react';

type Item = { disabled: boolean; value: string };

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const register = useCallback((item: string, disabled: boolean) => {
    setItems((current) => {
      return [
        ...current.filter(({ value }) => {
          return value !== item;
        }),
        { disabled, value: item },
      ];
    });

    return () => {
      setItems((current) => {
        return current.filter(({ value }) => {
          return value !== item;
        });
      });
    };
  }, []);

  const enabled = useMemo(() => {
    return items
      .filter(({ disabled }) => {
        return !disabled;
      })
      .map(({ value }) => {
        return value;
      });
  }, [items]);

  return { enabled, register };
};

export { useItems };
