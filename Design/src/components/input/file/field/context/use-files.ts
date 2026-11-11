import React, { useRef, useState } from 'react';

const useFiles = (
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
) => {
  const node = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDragging(false);
    setFiles(Array.from(event.target.files ?? []));
    onChange?.(event);
  };

  const remove = (index: number) => {
    const element = node.current;

    if (!element) {
      return;
    }

    const kept = new DataTransfer();

    files
      .filter((_, at) => at !== index)
      .forEach((file) => kept.items.add(file));

    element.files = kept.files;
    element.dispatchEvent(new Event('change', { bubbles: true }));
    element.focus({ focusVisible: true });
  };

  return { change, dragging, files, node, remove, setDragging };
};

export { useFiles };
