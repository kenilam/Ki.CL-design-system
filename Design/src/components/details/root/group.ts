const group = (details: HTMLDetailsElement, name: string) => {
  const siblings = [...(details.parentElement?.children ?? [])].filter(
    (element) => {
      return element instanceof HTMLDetailsElement;
    }
  );
  const shared =
    details.name ||
    siblings.find((sibling) => {
      return sibling.name;
    })?.name ||
    name;

  details.name = shared;

  siblings.forEach((sibling) => {
    sibling.name = shared;
  });
};

export { group };
