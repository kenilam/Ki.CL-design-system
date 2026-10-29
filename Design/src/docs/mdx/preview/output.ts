const VOID = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'track',
  'wbr',
]);

const attributesOf = (element: Element) => {
  return Array.from(element.attributes)
    .map(({ name, value }) => {
      return value === ''
        ? ` ${name}`
        : ` ${name}="${value.replace(/"/g, '&quot;')}"`;
    })
    .join('');
};

const linesOf = (node: Node, depth: number): string[] => {
  const indent = '  '.repeat(depth);

  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent?.replace(/\s+/g, ' ').trim();

    return text ? [`${indent}${text}`] : [];
  }

  if (!(node instanceof Element)) {
    return [];
  }

  const tag = node.tagName.toLowerCase();
  const open = `${indent}<${tag}${attributesOf(node)}>`;

  if (VOID.has(tag)) {
    return [open];
  }

  if (tag === 'svg') {
    return [`${open}…</svg>`];
  }

  const children = Array.from(node.childNodes).flatMap((child) => {
    return linesOf(child, depth + 1);
  });

  if (children.length === 0) {
    return [`${open}</${tag}>`];
  }

  if (children.length === 1 && !children[0].trimStart().startsWith('<')) {
    return [`${open}${children[0].trim()}</${tag}>`];
  }

  return [open, ...children, `${indent}</${tag}>`];
};

export const outputOf = (stage: Element) => {
  return Array.from(stage.childNodes)
    .flatMap((node) => {
      return linesOf(node, 0);
    })
    .join('\n');
};
