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

const attributesOf = (element: Element) =>
  Array.from(element.attributes)
    .map(({ name, value }) =>
      value === '' ? ` ${name}` : ` ${name}="${value.replace(/"/g, '&quot;')}"`
    )
    .join('');

/** A node as indented lines of HTML. An icon's drawing is left out. */
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

  const children = Array.from(node.childNodes).flatMap((child) =>
    linesOf(child, depth + 1)
  );

  if (children.length === 0) {
    return [`${open}</${tag}>`];
  }

  if (children.length === 1 && !children[0].trimStart().startsWith('<')) {
    return [`${open}${children[0].trim()}</${tag}>`];
  }

  return [open, ...children, `${indent}</${tag}>`];
};

/** What the stage renders, as the HTML a reader would write. */
export const outputOf = (stage: Element) =>
  Array.from(stage.childNodes)
    .flatMap((node) => linesOf(node, 0))
    .join('\n');
