import { lazy } from 'react';

export const PAGES = {
  action: {
    button: {
      context: 'button',
      Content: lazy(() => {
        return import('design/components/button/docs/index.mdx');
      }),
    },
    'hyper-link': {
      context: 'hyper_link',
      Content: lazy(() => {
        return import('design/components/hyper-link/docs/index.mdx');
      }),
    },
  },
  input: {
    input: {
      context: 'input',
      Content: lazy(() => {
        return import('design/components/input/docs/index.mdx');
      }),
    },
    'input-group': {
      context: 'input_group',
      Content: lazy(() => {
        return import('design/components/input-group/docs/index.mdx');
      }),
    },
    textarea: {
      context: 'textarea',
      Content: lazy(() => {
        return import('design/components/textarea/docs/index.mdx');
      }),
    },
    checkbox: {
      context: 'checkbox',
      Content: lazy(() => {
        return import('design/components/checkbox/docs/index.mdx');
      }),
    },
    'radio-group': {
      context: 'radio_group',
      Content: lazy(() => {
        return import('design/components/radio-group/docs/index.mdx');
      }),
    },
    switch: {
      context: 'switch',
      Content: lazy(() => {
        return import('design/components/switch/docs/index.mdx');
      }),
    },
    segmented: {
      context: 'segmented',
      Content: lazy(() => {
        return import('design/components/segmented/docs/index.mdx');
      }),
    },
    select: {
      context: 'select',
      Content: lazy(() => {
        return import('design/components/select/docs/index.mdx');
      }),
    },
    combobox: {
      context: 'combobox',
      Content: lazy(() => {
        return import('design/components/combobox/docs/index.mdx');
      }),
    },
    'date-picker': {
      context: 'date_picker',
      Content: lazy(() => {
        return import('design/components/date-picker/docs/index.mdx');
      }),
    },
    calendar: {
      context: 'calendar',
      Content: lazy(() => {
        return import('design/components/calendar/docs/index.mdx');
      }),
    },
    form: {
      context: 'form',
      Content: lazy(() => {
        return import('design/components/form/docs/index.mdx');
      }),
    },
  },
  display: {
    text: {
      context: 'text',
      Content: lazy(() => {
        return import('design/components/text/docs/index.mdx');
      }),
    },
    heading: {
      context: 'heading',
      Content: lazy(() => {
        return import('design/components/heading/docs/index.mdx');
      }),
    },
    markdown: {
      context: 'markdown',
      Content: lazy(() => {
        return import('design/components/markdown/docs/index.mdx');
      }),
    },
    badge: {
      context: 'badge',
      Content: lazy(() => {
        return import('design/components/badge/docs/index.mdx');
      }),
    },
    list: {
      context: 'list',
      Content: lazy(() => {
        return import('design/components/list/docs/index.mdx');
      }),
    },
    image: {
      context: 'image',
      Content: lazy(() => {
        return import('design/components/image/docs/index.mdx');
      }),
    },
    video: {
      context: 'video',
      Content: lazy(() => {
        return import('design/components/video/docs/index.mdx');
      }),
    },
    diagram: {
      context: 'diagram',
      Content: lazy(() => {
        return import('design/components/diagram/docs/index.mdx');
      }),
    },
    'animated-text': {
      context: 'animated_text',
      Content: lazy(() => {
        return import('design/components/animated-text/docs/index.mdx');
      }),
    },
  },
  feedback: {
    spinner: {
      context: 'spinner',
      Content: lazy(() => {
        return import('design/components/spinner/docs/index.mdx');
      }),
    },
    skeleton: {
      context: 'skeleton',
      Content: lazy(() => {
        return import('design/components/skeleton/docs/index.mdx');
      }),
    },
    status: {
      context: 'status',
      Content: lazy(() => {
        return import('design/components/status/docs/index.mdx');
      }),
    },
    bubble: {
      context: 'bubble',
      Content: lazy(() => {
        return import('design/components/bubble/docs/index.mdx');
      }),
    },
    'scroll-indicator': {
      context: 'scroll_indicator',
      Content: lazy(() => {
        return import('design/components/scroll-indicator/docs/index.mdx');
      }),
    },
  },
  surfaces: {
    card: {
      context: 'card',
      Content: lazy(() => {
        return import('design/components/card/docs/index.mdx');
      }),
    },
    dialog: {
      context: 'dialog',
      Content: lazy(() => {
        return import('design/components/dialog/docs/index.mdx');
      }),
    },
    sheet: {
      context: 'sheet',
      Content: lazy(() => {
        return import('design/components/sheet/docs/index.mdx');
      }),
    },
    popover: {
      context: 'popover',
      Content: lazy(() => {
        return import('design/components/popover/docs/index.mdx');
      }),
    },
    details: {
      context: 'details',
      Content: lazy(() => {
        return import('design/components/details/docs/index.mdx');
      }),
    },
    frame: {
      context: 'frame',
      Content: lazy(() => {
        return import('design/components/frame/docs/index.mdx');
      }),
    },
  },
  navigation: {
    breadcrumb: {
      context: 'breadcrumb',
      Content: lazy(() => {
        return import('design/components/breadcrumb/docs/index.mdx');
      }),
    },
    navigation: {
      context: 'navigation',
      Content: lazy(() => {
        return import('design/components/navigation/docs/index.mdx');
      }),
    },
    menu: {
      context: 'menu',
      Content: lazy(() => {
        return import('design/components/menu/docs/index.mdx');
      }),
    },
    'page-indicator': {
      context: 'page_indicator',
      Content: lazy(() => {
        return import('design/components/page-indicator/docs/index.mdx');
      }),
    },
  },
  layout: {
    layout: {
      context: 'layout',
      Content: lazy(() => {
        return import('design/components/layout/docs/index.mdx');
      }),
    },
    separator: {
      context: 'separator',
      Content: lazy(() => {
        return import('design/components/separator/docs/index.mdx');
      }),
    },
    animation: {
      context: 'animation',
      Content: lazy(() => {
        return import('design/components/animation/docs/index.mdx');
      }),
    },
  },
} as const;

export type Category = keyof typeof PAGES;
export type Component = {
  [C in Category]: (typeof PAGES)[C][keyof (typeof PAGES)[C]];
}[Category];
