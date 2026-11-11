const focusables = (node: HTMLElement | null, selector: string) => {
  return node ? Array.from(node.querySelectorAll<HTMLElement>(selector)) : [];
};

export { focusables };
