export const CLASS_NAME = 'kicl--docs';

/**
 * The sidebar's groups, in order, as in Uber's Base. Each lists the component
 * folders it documents; a folder shows once it has a `docs/index.mdx`.
 */
export const CATEGORIES = {
  action: ['button', 'hyper-link'],
  input: [
    'input',
    'textarea',
    'checkbox',
    'radio-group',
    'switch',
    'segmented',
    'select',
    'combobox',
    'date-picker',
    'calendar',
    'form',
  ],
  display: [
    'text',
    'heading',
    'markdown',
    'badge',
    'list',
    'image',
    'video',
    'diagram',
    'animated-text',
  ],
  feedback: ['spinner', 'skeleton', 'status', 'bubble', 'scroll-indicator'],
  surfaces: ['card', 'dialog', 'sheet', 'popover', 'details', 'frame'],
  navigation: ['navigation', 'menu', 'page-indicator'],
  layout: ['layout', 'separator', 'animation'],
} as const;

export type Category = keyof typeof CATEGORIES;
